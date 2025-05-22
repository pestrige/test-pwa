import { FC } from 'react';
import { BalanceHeader } from '../../widgets/BalanceHeader/BalanceHeader';
import { BalanceInfo } from '../../widgets/BalanceInfo/BalanceInfo';
import { Scrollable } from '../../shared/ui';

export const BalancePage: FC = () => {
  return (
    <Scrollable>
      <BalanceHeader />
      <BalanceInfo />
    </Scrollable>
  );
};
