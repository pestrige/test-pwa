import { FC } from 'react';
import { useNavigate } from 'react-router';
import arrow from '../assets/arrow.png';
import arrowWhite from '../assets/arrow-white.png';
import cls from './backbutton.module.css';

type BackButtonProps = {
  contrast?: boolean;
  className?: string;
};

export const BackButton: FC<BackButtonProps> = ({ contrast, className }) => {
  const navigate = useNavigate();

  return (
    <button type="button" className={`${cls.root} ${className ?? ''}`} onClick={() => navigate(-1)}>
      <img width={16} className={cls.back} src={contrast ? arrowWhite : arrow} alt="arrow" />
    </button>
  );
};
