import { FC } from 'react';
import { ShadowBox } from '../ShadowBox/ShadowBox.tsx';
import cls from './balanceCard.module.css';
import { balanceIcons, BalanceType } from '../../assets/balanceIcons.ts';

type Props = {
  title: string;
  subtitle?: string;
  type?: BalanceType;
  image?: string;
  imageWidth?: number;
};

export const BalanceCard: FC<Props> = ({ title, subtitle, type, image, imageWidth }) => {
  return (
    <ShadowBox>
      <div className={cls.container}>
        {!!type && (
          <div className={cls.icon}>
            <img width={40} height={40} src={balanceIcons[type]} alt="icon" />
          </div>
        )}
        <div className={cls.info}>
          <p>{title}</p>
          {!!subtitle && <span>{subtitle}</span>}
          {!!image && !!imageWidth && (
            <img className={type ? undefined : cls.infoImage} width={imageWidth} src={image} alt="cards" />
          )}
        </div>
      </div>
    </ShadowBox>
  );
};
