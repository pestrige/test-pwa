import { FC } from 'react';
import { PromoCard } from '../../shared/ui/PromoCard/PromoCard.tsx';
import cls from './promoCardsList.module.css';
import promo1 from '../../shared/assets/promo1.png';
import promo2 from '../../shared/assets/promo2.png';
import promo3 from '../../shared/assets/promo3.png';
import promo4 from '../../shared/assets/promo4.png';
import promo5 from '../../shared/assets/promo5.png';

export const PromoCardsList: FC = () => {
  return (
    <ul className={cls.list}>
      <PromoCard image={promo1} key="1" />
      <PromoCard image={promo2} key="2" />
      <PromoCard image={promo3} key="3" />
      <PromoCard image={promo4} key="4" />
      <PromoCard image={promo5} key="5" />
      <li className={cls.last} key="last">
        .
      </li>
    </ul>
  );
};
