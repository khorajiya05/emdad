import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";

const PrivateRoute: React.FC<any> = ({ isAuth, children, ...rest }) => {
  let location = useLocation();
  return (
    <React.Fragment>
      <Route
        {...rest}
        render={() =>
          isAuth ? (
            children
          ) : (
            <Navigate to="/login" state={{ from: location }} />
          )
        }
      />
    </React.Fragment>
  );
};

export default PrivateRoute;
