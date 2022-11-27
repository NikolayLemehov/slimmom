import { useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import authOperations from 'redux/auth/authOperations';
import Header from './Header/Header';
import { LogInPage } from '../pages/LogInPage/LogInPage';
import CalculatorPage from '../pages/CalculatorPage/CalculatorPage';
import DiaryPage from 'pages/DiaryPage/DiaryPage';
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
import HomePage from '../pages/HomePage/HomePage';
import Loader from './Loader/Loader';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import PublicRestrictedRoute from './PublicStrictedRoute/PublicRestrictedRoute';
import MobileModalForm from './MobileModalForm/MobileModalForm';
import NotFound from '../pages/NotFound/NotFound';

const UiKit = lazy(() => import('./UiKit/UiKit'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route
            index
            element={
              <PublicRestrictedRoute
                redirectTo="/calculator"
                children={<HomePage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <PublicRestrictedRoute
                redirectTo="/calculator"
                children={<LogInPage />}
              />
            }
          />
          <Route
            path="registration"
            element={
              <PublicRestrictedRoute
                redirectTo="/calculator"
                children={<RegistrationPage />}
              />
            }
          />
          <Route
            path="calculator"
            element={
              <PrivateRoute redirectTo="/" children={<CalculatorPage />} />
            }
          />
          <Route
            path="diary"
            element={
              <PrivateRoute redirectTo="/login" children={<DiaryPage />} />
            }
          />
          <Route path="uikit" element={<UiKit />} />
          <Route path="mobileModal" element={<MobileModalForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
