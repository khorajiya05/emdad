import axios from "axios";
import { Middleware, MiddlewareAPI, Dispatch, AnyAction, Action } from "redux";
import { loginSuccess, logout } from "../store/auth/auth.action";

export const API = axios.create({
  baseURL: "http://192.168.1.243:3007/",
});


export const apiMiddleware: Middleware = (storeApi: MiddlewareAPI<any>) => (next: Dispatch<AnyAction>) => (action: Action) => {
  const { dispatch } = storeApi;

  API.interceptors.request.use(
    (config: any) => {
      const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjQ4ODQ3MTMsImV4cCI6MTY2NzQ3NjcxMywiYXVkIjoiYWNjZXNzX3Rva2VuIiwic3ViIjoiNTAyNGNhMTEtN2M5NC00MTYxLWE0NTktOTA1NTMxOWM2ZGM0In0.IF1hKvlxdLPeUocB8s-zYFa8xzEiT_n7BhQSHlja6zA"
      // storeApi.getState().auth.token;
      if (authToken) {
        config.headers.Authorization = `Bearer ${authToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  API.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error.response.status === 403) {
        error.response.data.message = "403";
      }
      if (
        error.response.status === 401 &&
        error.response.config.url !== "/auth/signin"
      ) {
        const refreshToken = localStorage.getItem("lRefreshToken");

        return API.post("/auth/refresh", { refreshToken: refreshToken })
          .then((response) => {
            dispatch(
              loginSuccess({
                token: response.data.access_token,
                refreshToken: response.data.refresh_token,
              })
            );
            localStorage.setItem("lToken", response.data.access_token);
            localStorage.setItem("lRefreshToken", response.data.refresh_token);
            error.response.config.headers[
              "Authorization"
            ] = `Bearer ${response.data.access_token}`;
            return API(error.response.config);
          })
          .catch((error) => {
            dispatch(logout());
            return Promise.reject(error);
          });
      }

      return Promise.reject(error);
    }
  );

  // call the next action
  next(action);
};
