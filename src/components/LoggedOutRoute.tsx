import React, { useContext } from "react";
import { Redirect, Route } from "react-router-dom";

import UserContext from "../context/UserContext";

const LoggedOutRoute: React.FC = ({ children }) => {
  const { user } = useContext(UserContext);

  return !user ? <div>{children}</div> : <Redirect to="/dashboard" />;
};

export default LoggedOutRoute;
