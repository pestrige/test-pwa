import { FC } from 'react';
import { ProfileCard } from '../../entities/user/ui/ProfileCard.tsx';
import gift from '../../shared/assets/gift.jpeg';
import cls from './homeProfile.module.css';

export const HomeProfile: FC = () => {
  return (
    <div className={cls.root}>
      <ProfileCard type="compact" />

      <img width={36} src={gift} alt="gift" />
    </div>
  );
};
