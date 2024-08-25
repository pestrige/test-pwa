import { FC } from 'react';
import cls from './promoCard.module.css';

type Props = {
  image: string;
};

export const PromoCard: FC<Props> = ({ image }) => {
  return (
    <li className={cls.promo}>
      <img width={92} src={image} alt="promo" />
    </li>
  );
};
