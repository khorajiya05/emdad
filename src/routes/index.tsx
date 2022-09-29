import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate as Redirect,
} from "react-router-dom";
import { Suspense } from "react";
import { BarsLoader } from "../components/loader/Loader";

import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { publicRoutes, privateRoutes } from "./routes";
import { Header } from "../components";

export default function AppRouter() {
  // const isLoggedout = useSelector((state: Store) => state.userDataReducer.isLoggedout);

  const LoggedIn = false;

  useEffect(() => {}, [LoggedIn]);

  return (
    <>
      <Suspense fallback={<BarsLoader />}>
   
          <Switch>
            {publicRoutes.map(({ path, element: Element }, index) => (
              <Route
                key={index}
                path={path}
                element={
                  <>
                    <Element />
                  </>
                }
              />
            ))}

            {LoggedIn ? (
              <Route path="/*" element={<Redirect to="/login" />} />
            ) : (
              <>
                {privateRoutes.map(({ path, element: Element }, index) => (
                  <Route
                    key={index}
                    path={path}
                    element={
                      <>
                        <Header />
                        <Element />
                      </>
                    }
                  />
                ))}
                <Route path="/*" element={<Redirect to="/login" />} />
              </>
            )}
          </Switch>
    
      </Suspense>
    </>
  );
}
