import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ component: Component, ...rest }) => {
  const Admin = useSelector((state) => state.authReducer.admin);
  
  if (!Admin) {
    return <Redirect to="/" />;
  } 
  return <Route component={Component} {...rest} />;
};

export default AdminRoute;