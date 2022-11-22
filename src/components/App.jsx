import {lazy, Suspense} from 'react';
import Home from 'pages/LogInPage/Home/Home';
import {Outlet, Route, Routes} from 'react-router-dom';
import {LogInPage} from '../pages/LogInPage/LogInPage';

const UiKit = lazy(() => import('./UiKit/UiKit'));

export const App = () => {
  return (
    <>
      <div>Header</div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Outlet/>}>
            <Route index element={<Home />} />
            <Route path="login" element={<LogInPage/>}/>
            <Route path="registration" element={<div>Registration</div>}/>
            <Route path="calculator" element={<div>Calculator</div>}/>
            <Route path="diary" element={<div>Diary</div>}/>
            <Route path="uikit" element={<UiKit/>}/>
          </Route>
          <Route path="*" element={<div>404</div>}/>
        </Routes>
      </Suspense>
    </>
  );
};
