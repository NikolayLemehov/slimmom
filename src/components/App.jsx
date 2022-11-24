import { useDispatch } from 'react-redux';
import { lazy, Suspense, useEffect } from 'react';
import { Container } from '@chakra-ui/react';
<<<<<<< HEAD
// import Home from 'pages/LogInPage/Home/Home';
import Home from 'pages/HomePage/HomePage';
=======
>>>>>>> dev
import { Outlet, Route, Routes } from 'react-router-dom';
import { LogInPage } from '../pages/LogInPage/LogInPage';
import Header from './Header/Header';
import authOperations from 'redux/auth/authOperations';
import CalculatorPage from '../pages/CalculatorPage/CalculatorPage';
import DiaryPage from 'pages/DiaryPage/DiaryPage';
<<<<<<< HEAD
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
=======
import {RegistrationPage} from "../pages/RegistrationPage/RegistrationPage";
import HomePage from "../pages/HomePage/HomePage";
>>>>>>> dev

const UiKit = lazy(() => import('./UiKit/UiKit'));

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.refresh());
  }, [dispatch]);

  return (
<<<<<<< HEAD
    <Container
      maxW={{ sm: '768px', md: '1280px' }}
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Header style={{ marginTop: '0' }} />
      <div style={{ flexGrow: '1', display: 'flex', flexDirection: 'column' }}>
        <Suspense fallback={<div>Loading...</div>}>
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
=======
    <Container maxW={{sm: '768px', md: '1280px'}} style={{display: 'flex', flexDirection: 'column', minHeight: '100vh'}}>
      <Header style={{marginTop: '0'}}/>
      <div style={{flexGrow: '1', display: 'flex', flexDirection: 'column'}}>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route index element={<HomePage />} />
            <Route path="login" element={<LogInPage />} />
            <Route path="registration" element={<RegistrationPage/>} />
            <Route path="calculator" element={<CalculatorPage />} />
            <Route path="diary" element={<DiaryPage />} />
            <Route path="uikit" element={<UiKit />} />
          </Route>
          <Route path="*" element={<div>404</div>} />
        </Routes>
      </Suspense>
>>>>>>> dev
      </div>
    </Container>
  );
};
