import { Outlet, Route, Routes } from 'react-router-dom';
import { LogInPage } from '../pages/LogInPage/LogInPage';

import CalculatorСalorieForm from './CalculatorСalorieForm/CalculatorСalorieForm';

export const App = () => {
  return (
    <>
      <div>Header</div>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="login" element={<LogInPage />} />
          <Route path="registration" element={<div>Registration</div>} />
          <Route path="calculator" element={<CalculatorСalorieForm />} />
          <Route path="diary" element={<div>Diary</div>} />
        </Route>
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </>
  );
};
