import { FC } from 'react';
import { BalanceType } from '../../shared/assets/balanceIcons.ts';
import { BalanceCard } from '../../shared/ui/BalanceCard/BalanceCard.tsx';
import cardsImage from '../../shared/assets/cards.jpeg';
import ebayCard from '../../shared/assets/ebay-cards.png';
import rewards from '../../shared/assets/rewards.png';
import transactionsChart from '../../shared/assets/transactions-chart.png';
import cls from './balanceList.module.css';

export const BalanceList: FC = () => {
  return (
    <ul className={cls.balanceList}>
      <li className={cls.transactions} key="transactions">
        <BalanceCard
          title="Transactions"
          subtitle="2015 417 spent in August"
          image={transactionsChart}
          imageWidth={130}
        />
        <BalanceCard title={'Cashback &\u00A0Rewards'} image={rewards} imageWidth={120} />
      </li>
      <li key="black">
        <BalanceCard title="42 953,02 ₽" subtitle="Black" type={BalanceType.RUB} image={cardsImage} imageWidth={105} />
      </li>
      <li key="usd">
        <BalanceCard title="0 $" subtitle="Black USD" type={BalanceType.USD} />
      </li>
      <li key="eur">
        <BalanceCard title="0,13 €" subtitle="Black EUR" type={BalanceType.EUR} />
      </li>
      <li key="platinum">
        <BalanceCard title="320 000 ₽" subtitle="Platinum" type={BalanceType.RUB} image={ebayCard} imageWidth={50} />
      </li>

      <li key="deposit">
        <BalanceCard title="2 000 000 ₽" subtitle="Deposit" type={BalanceType.DEPOSIT} />
      </li>
      <li key="savings">
        <BalanceCard title="500 000 ₽" subtitle="Savings" type={BalanceType.SAVINGS} />
      </li>
    </ul>
  );
};
