import { FC } from 'react';
import { HomeProfile } from '../../widgets/HomeProfile/HomeProfile.tsx';
import { SearchHome } from '../../widgets/Search/SearchHome.tsx';
import { PromoCardsList } from '../../widgets/PromoCardsList/PromoCardsList.tsx';
import { BalanceList } from '../../widgets/BalanceList/BalanceList.tsx';
import { Scrollable } from '../../shared/ui';

export const HomePage: FC = () => {
  return (
    <Scrollable>
      <HomeProfile />
      <SearchHome />
      <PromoCardsList />
      <BalanceList />
    </Scrollable>
  );
};
