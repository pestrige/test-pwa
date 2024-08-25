import { FC } from 'react';
import userImage from '../../shared/assets/user-icon.jpeg';
import proLabel from '../../shared/assets/pro-label.jpeg';
import gift from '../../shared/assets/gift.jpeg';
import arrow from '../../shared/assets/arrow.png';
import cls from './homeProfile.module.css';

export const HomeProfile: FC = () => {
  return (
    <div className={cls.root}>
      <img width={40} src={userImage} alt="user" />

      <div className={cls.info}>
        <p>
          Profile
          <img width={10} src={arrow} alt="arrow" />
        </p>
        <img width={30} src={proLabel} alt="pro" />
      </div>

      <img width={36} src={gift} alt="gift" />
    </div>
  );
};
