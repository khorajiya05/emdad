import React from "react";
import Header from "../header/header";

import { Navigate, Route } from "react-router-dom";

const PrivateRoute: React.FC<any> = ({ element: Element, ...rest }) => {
  return (
    <React.Fragment>
      <Route
        {...rest}
        render={(props:any) =>
          true ? (
            <React.Fragment>
              <Header />
              <Element {...props} />
            </React.Fragment>
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </React.Fragment>
  );
};
// }
export default PrivateRoute;
