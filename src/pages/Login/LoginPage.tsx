import { FC } from 'react';
import { useNavigate } from 'react-router';
import { useUserSetContext, UserType } from '../../entities/user';
import { AppRoutes } from '../../shared/config/router.ts';
import cls from './loginPage.module.css';

export const LoginPage: FC = () => {
  const setUser = useUserSetContext();
  const navigate = useNavigate();

  const handleButtonClick = (user: UserType) => () => {
    setUser(user);
    navigate(AppRoutes.home);
  };

  return (
    <div className={cls.root}>
      LOGIN
      <button onClick={handleButtonClick('asya')}>asya</button>
      <button onClick={handleButtonClick('dima')}>dima</button>
    </div>
  );
};
