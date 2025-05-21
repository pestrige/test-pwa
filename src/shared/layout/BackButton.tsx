import { FC } from 'react';
import { useNavigate } from 'react-router';
import arrow from '../assets/arrow.png';
import cls from './backbutton.module.css';

type BackButtonProps = {
  className?: string;
};

export const BackButton: FC<BackButtonProps> = ({ className }) => {
  const navigate = useNavigate();

  return (
    <button type="button" className={`${cls.root} ${className ?? ''}`} onClick={() => navigate(-1)}>
      <img width={16} className={cls.back} src={arrow} alt="arrow" />
    </button>
  );
};
