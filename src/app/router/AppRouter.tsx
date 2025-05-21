import { FC, ReactNode } from 'react';
import { Route, Routes } from 'react-router';
import { HomePage } from '../../pages/Home/HomePage.tsx';
import { ProfilePage } from '../../pages/Profile/ProfilePage.tsx';
import { BalancePage } from '../../pages/Balance/BalancePage.tsx';
import { LoginPage } from '../../pages/Login/LoginPage.tsx';
import { AppRoutes } from '../../shared/config/router.ts';
import { RequireUser } from './RequireUser.tsx';

export const AppRouter: FC = () => {
  const withUser = (children: ReactNode) => {
    return <RequireUser>{children}</RequireUser>;
  };

  return (
    <Routes>
      <Route path={AppRoutes.home} element={withUser(<HomePage />)} />

      <Route path={AppRoutes.profile} element={withUser(<ProfilePage />)} />
      <Route path={AppRoutes.balance} element={withUser(<BalancePage />)} />

      <Route path={AppRoutes.login} element={<LoginPage />} />
    </Routes>
  );
};
