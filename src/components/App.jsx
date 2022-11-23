import { lazy, Suspense } from 'react';
import { Box } from '@chakra-ui/react';
import Home from 'pages/LogInPage/Home/Home';
import { Outlet, Route, Routes } from 'react-router-dom';
import { LogInPage } from '../pages/LogInPage/LogInPage';
import Header from './Header/Header';
import CalculatorPage from '../pages/CalculatorPage/CalculatorPage';

const UiKit = lazy(() => import('./UiKit/UiKit'));

export const App = () => {
  return (
    <Box
      mr="auto"
      ml="auto"
      pr={{ xs: '20px', md: '32px', lg: '16px' }}
      pl={{ xs: '20px', md: '32px', lg: '16px' }}
      maxW={{ sm: '480px', md: '768px', lg: '1280px' }}
    >
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
    </Box>
  );
};
