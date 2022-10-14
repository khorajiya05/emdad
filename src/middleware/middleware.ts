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
      const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjUwNTMwOTAsImV4cCI6MTY2NzY0NTA5MCwiYXVkIjoiYWNjZXNzX3Rva2VuIiwic3ViIjoiNzA2ZGQ5MDctM2I5Ni00YWQ3LTg0YTQtZjVhYzkxZWJkNjhjIn0.pSmtbyyL08bVQgtItLIpR23pAHCmgZLrBF3UjheMqeg"
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
