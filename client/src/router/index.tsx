import { AUTH_PATH, LOGIN_PATH, SIGNUP_PATH } from './consts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { AuthLayout } from '@/components/layout/auth-layout';
import { LoginPage } from '@/pages/auth/login';
import { MainLayout } from '@/components/layout/main-layout';
import { PAGES } from '@/pages/pages';
import { SignupPage } from '@/pages/auth/signup';

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/${AUTH_PATH}`} element={<AuthLayout />}>
          <Route path={LOGIN_PATH} element={<LoginPage />} />
          <Route path={SIGNUP_PATH} element={<SignupPage />} />

          <Route path='*' element={<div> auth 404</div>} />
        </Route>

        <Route element={<MainLayout />}>
          {PAGES.map(page => (
            <Route key={page.path} path={page.path} element={<page.component />} />
          ))}

          <Route path='*' element={<div> 404 </div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
