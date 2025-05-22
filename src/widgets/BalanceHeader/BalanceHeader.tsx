import { FC } from 'react';
import { useUserContext } from '../../entities/user';
import { formatPrice } from '../../shared/lib/formatPrice';
import { BackButton } from '../../shared/layout/BackButton';
import { ShadowBox } from '../../shared/ui';
import cls from './balanceHeader.module.css';

export const BalanceHeader: FC = () => {
  const { balance } = useUserContext();

  return (
    <div className={cls.root}>
      <div className={cls.inner}>
        <BackButton contrast className={cls.back} />

        <h1 className={cls.title}>Deposit</h1>
        <p className={cls.price}>{formatPrice(balance.deposit)}</p>
        <p className={cls.subtitle}>Rate 21% per year</p>

        <div className={cls.bottom} />
      </div>

      <ShadowBox className={cls.box}>
          <p>Add money</p>
        <p>Withdraw</p>
      </ShadowBox>
    </div>
  );
};
