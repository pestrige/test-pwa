import { FC, PropsWithChildren } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AppRoutes } from '../../shared/config/router.ts';
import { useUserContext } from '../../entities/user';

export const RequireUser: FC<PropsWithChildren> = ({ children }) => {
  const location = useLocation();
  const user = useUserContext();

  if (!user.type) {
    const from = location.pathname + location.search;
    return <Navigate to={AppRoutes.login} state={{ from, search: location.search }} replace />;
  }

  return children;
};
