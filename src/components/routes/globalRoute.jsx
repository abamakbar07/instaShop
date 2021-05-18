import { Route } from "react-router-dom";
import React from "react";

export const AdminRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        <Component {...props} />
      }
    />
  );
};

export default AdminRoute;
