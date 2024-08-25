import { FC } from 'react';
import cls from './searchHome.module.css';
import searchIcon from '../../shared/assets/search.jpeg';

export const SearchHome: FC = () => {
  return (
    <div className={cls.search}>
      <img width={20} src={searchIcon} alt="search" />
      <span>Transfers</span>
    </div>
  );
};
