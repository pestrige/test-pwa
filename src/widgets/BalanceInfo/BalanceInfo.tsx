import { FC } from 'react';
import { useUserContext } from '../../entities/user';
import { getCurrentCredited, getCurrentDeposit } from '../../shared/lib/getCurrentSpending';
import transactionsChart from '../../shared/assets/transactions-chart.png';
import priceBadge from '../../shared/assets/price-badge.png';
import { BalanceCard, DarkBox, ShadowBox } from '../../shared/ui';
import cls from './balanceInfo.module.css';

export const BalanceInfo: FC = () => {
  const { info } = useUserContext();

  return (
    <ul className={cls.root}>
      <li className={cls.twoCell} key="info">
        <BalanceCard
          title="Transactions"
          subtitle={getCurrentDeposit()}
          image={transactionsChart}
          imageWidth={130}
        />

        <BalanceCard
          title="Anatytics"
          subtitle={getCurrentCredited()}
          image={priceBadge}
          imageWidth={90}
        />
      </li>

      <li key="details">
        <ShadowBox>
          <p className={cls.title}>Bank Details</p>
          <p>Account Number</p>
          <p className={cls.description}>{info.accountNumber}</p>

          <p>Holder name</p>
          <p className={cls.description}>{info.fullName}</p>

          <p>Holder passport</p>
          <p className={cls.description}>{info.id}</p>
        </ShadowBox>
      </li>

      <li key="close">
        <DarkBox className={cls.close}>Close deposit</DarkBox>
      </li>
    </ul>
  );
};
