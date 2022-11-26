import { useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import { Outlet, Route, Routes } from 'react-router-dom';

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

const UiKit = lazy(() => import('./UiKit/UiKit'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    <Container
      maxW={{ sm: '768px', md: '1280px' }}
      position="relative"
      pt={{ xs: '152px', md: '180px', lg: '293px' }}
    >
      <Header />

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Outlet />}>
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
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </Container>
  );
};
