import { lazy, Suspense, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import Home from 'pages/LogInPage/Home/Home';
import { Outlet, Route, Routes } from 'react-router-dom';
import { LogInPage } from '../pages/LogInPage/LogInPage';
import Header from './Header/Header';
import CalculatorСalorieForm from './CalculatorСalorieForm/CalculatorСalorieForm';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

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
            <Route path="calculator" element={<CalculatorСalorieForm />} />
            <Route path="diary" element={<div>Diary</div>} />
            <Route path="uikit" element={<UiKit />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
    </Container>
  );
};
