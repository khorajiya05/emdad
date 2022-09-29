import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";

const PublicRoute: React.FC<any> = ({ isAuth, children, ...rest }) => {
  let location = useLocation();
  return (
    <React.Fragment>
      <Route
        {...rest}
        render={() =>
          isAuth ? <Navigate to="/" state={{ from: location }} /> : children
        }
      />
    </React.Fragment>
  );
};

export default PublicRoute;
