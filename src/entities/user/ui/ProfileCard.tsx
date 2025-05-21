import { FC } from 'react';
import { NavLink } from 'react-router';
import { AppRoutes } from '../../../shared/config/router.ts';
import arrow from '../../../shared/assets/arrow.png';
import proLabel from '../../../shared/assets/pro-label.jpeg';
import { useUserContext } from '../model/userContext.tsx';
import cls from './profileCard.module.css';

const IconSize = {
  compact: 40,
  regular: 80,
} as const;

type ProfileCardProps = {
  type?: 'compact' | 'regular';
};

export const ProfileCard: FC<ProfileCardProps> = ({ type = 'regular' }) => {
  const { icon, info } = useUserContext();

  const isCompact = type === 'compact';
  const iconUrl = icon[type];
  const iconSize = IconSize[type];

  return (
    <NavLink to={AppRoutes.profile} className={cls[type]}>
      <img width={iconSize} src={iconUrl} alt="user" />

      <div className={`${cls.info} ${isCompact ? cls.infoCompact : ''}`}>
        <p>
          {isCompact ? 'Profile' : info.shortName}
          {isCompact && <img width={10} src={arrow} alt="arrow" />}
        </p>
        <img width={30} src={proLabel} alt="pro" />
      </div>
    </NavLink>
  );
};
