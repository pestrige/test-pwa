import { FC } from 'react';
import { ShadowBox } from '../ShadowBox/ShadowBox';
import cls from './docCard.module.css';

type DocCardProps = {
  title: string;
  subtitle?: string;
  icon: string;
};
export const DocCard: FC<DocCardProps> = ({ title, subtitle, icon }) => {
  return (
    <ShadowBox className={cls.root}>
      <img className={cls.img} width={40} src={icon} alt="icon" />
      <p>{title}</p>
      {!!subtitle && <span className={cls.subtitle}>{subtitle}</span>}
    </ShadowBox>
  );
};
