import React from "react";
import { Route, Routes } from "react-router-dom";
// import routes from "../../routes/routes";
import Header from "../header/header";

const ProtectedRoutes: React.FC<any> = () => {
  return (
    <React.Fragment>
      <Routes>
        {/* {routes.map(({ element: Element, path }) => (
         

          <Route path={`${path}`} key={path}>
            <Header />
            <Element />
          </Route>
        ))} */}
      </Routes>
    </React.Fragment>
  );
};

export default ProtectedRoutes;
