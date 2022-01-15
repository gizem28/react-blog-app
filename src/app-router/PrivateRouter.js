import React, { useAuth } from "../contexts/AuthContext";
import { Route, Navigate } from "react-router-dom";

const PrivateRouter = (props) => {
  const { user } = useAuth();

  return user ? (
    <Route path={props.path} components={props.components} />
  ) : (
    <Route path="/" element={<Navigate replace to="/login" />} />
  );
  //  (<Redirect to="/login"/>);
};

export default PrivateRouter;
