import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {authSelectors} from "../../redux/auth/authSelectors";

export default function PrivateRoute({ children, redirectTo }) {
  const location = useLocation();
  const isLoggedIn = useSelector(authSelectors.isLoggedIn);
  return isLoggedIn
    ? children
    : (
      <Navigate to={redirectTo} state={{from: location}}/>
    );

}
