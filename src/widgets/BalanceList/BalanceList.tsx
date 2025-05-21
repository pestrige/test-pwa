import { FC } from 'react';
import { NavLink } from 'react-router';
import { useUserContext } from '../../entities/user';
import { BalanceType } from '../../shared/assets/balanceIcons.ts';
import { BalanceCard } from '../../shared/ui/BalanceCard/BalanceCard.tsx';
import cardsImage from '../../shared/assets/cards.jpeg';
import ebayCard from '../../shared/assets/ebay-cards.png';
import rewards from '../../shared/assets/rewards.png';
import transactionsChart from '../../shared/assets/transactions-chart.png';
import { AppRoutes } from '../../shared/config/router.ts';
import { formatPrice } from '../../shared/lib/formatPrice.ts';
import { getCurrentSpending } from '../../shared/lib/getCurrentSpending.ts';
import cls from './balanceList.module.css';

export const BalanceList: FC = () => {
  const { balance } = useUserContext();

  return (
    <ul className={cls.balanceList}>
      <li className={cls.transactions} key="transactions">
        <BalanceCard
          title="Transactions"
          subtitle={getCurrentSpending(balance.spent)}
          image={transactionsChart}
          imageWidth={130}
        />
        <BalanceCard title={'Cashback &\u00A0Rewards'} image={rewards} imageWidth={120} />
      </li>

      <li key="black">
        <BalanceCard
          title={formatPrice(balance.black)}
          subtitle="Black"
          type={BalanceType.RUB}
          image={cardsImage}
          imageWidth={105}
        />
      </li>

      <li key="usd">
        <BalanceCard title="0 $" subtitle="Black USD" type={BalanceType.USD} />
      </li>

      <li key="eur">
        <BalanceCard title="0 €" subtitle="Black EUR" type={BalanceType.EUR} />
      </li>

      <li key="platinum">
        <BalanceCard
          title={formatPrice(balance.platinum)}
          subtitle="Platinum"
          type={BalanceType.RUB}
          image={ebayCard}
          imageWidth={50}
        />
      </li>

      <li key="deposit">
        <NavLink to={AppRoutes.balance}>
          <BalanceCard title={formatPrice(balance.deposit)} subtitle="Deposit" type={BalanceType.DEPOSIT} />
        </NavLink>
      </li>
      <li key="savings">
        <BalanceCard title={formatPrice(balance.savings)} subtitle="Savings" type={BalanceType.SAVINGS} />
      </li>
    </ul>
  );
};
