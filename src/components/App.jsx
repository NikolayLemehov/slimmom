import { lazy, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Outlet, Route, Routes } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

import { LogInPage } from '../pages/LogInPage/LogInPage';
import Home from 'pages/HomePage/HomePage';
import Header from './Header/Header';
import authOperations from 'redux/auth/authOperations';
import CalculatorPage from '../pages/CalculatorPage/CalculatorPage';

const UiKit = lazy(() => import('./UiKit/UiKit'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    <Container maxW={{ sm: '768px', md: '1280px' }}>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<Home />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="registration" element={<div>Registration</div>} />
            <Route path="calculator" element={<CalculatorPage />} />
            <Route path="diary" element={<div>Diary</div>} />
            <Route path="uikit" element={<UiKit />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </Container>
  );
};
