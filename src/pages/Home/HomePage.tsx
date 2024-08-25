import { FC } from 'react';
import { HomeProfile } from '../../widgets/HomeProfile/HomeProfile.tsx';
import { SearchHome } from '../../widgets/Search/SearchHome.tsx';
import { PromoCardsList } from '../../widgets/PromoCardsList/PromoCardsList.tsx';
import { BalanceList } from '../../widgets/BalanceList/BalanceList.tsx';
import cls from './homePage.module.css';

export const HomePage: FC = () => {
  return (
    <div className={cls.home}>
      <HomeProfile />
      <SearchHome />
      <PromoCardsList />
      <BalanceList />
    </div>
  );
};
