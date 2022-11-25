import React from 'react';
import {useSelector} from "react-redux";
import {authSelectors} from "../../redux/auth/authSelectors";
import {Navigate, useLocation} from "react-router-dom";

export default function PublicRestrictedRoute({redirectTo, children}) {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);

  return !isLoggedIn ? children : <Navigate to={location.state ? location.state.from : redirectTo}/>;
}

