import { lazy, Suspense, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
import Home from 'pages/HomePage/HomePage';
import { Outlet, Route, Routes } from 'react-router-dom';
import { LogInPage } from '../pages/LogInPage/LogInPage';
import Header from './Header/Header';

// import CalculatorСalorieForm from './CalculatorСalorieForm/CalculatorСalorieForm';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';
import CalculatorPage from '../pages/CalculatorPage/CalculatorPage';
import DiaryPage from 'pages/DiaryPage/DiaryPage';
import Loader from './Loader/Loader';
// import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';

const UiKit = lazy(() => import('./UiKit/UiKit'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
    <Container
      maxW={{ sm: '768px', md: '1280px' }}
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header style={{ marginTop: '0' }} />
      <div style={{ flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route index element={<Home />} />
              <Route path="login" element={<LogInPage />} />
              <Route path="registration" element={<div>Registration</div>} />
              <Route path="calculator" element={<CalculatorPage />} />
              <Route path="diary" element={<DiaryPage />} />
              <Route path="uikit" element={<UiKit />} />
            </Route>
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </Suspense>
      </div>
    </Container>
  );
};
