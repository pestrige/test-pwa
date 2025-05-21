import { FC, ReactNode } from 'react';
import clx from './shadowBox.module.css';

type Props = {
  children: ReactNode;
  className?: string;
};

export const ShadowBox: FC<Props> = ({ children, className }) => {
  return <div className={`${clx.root} ${className ?? ''}`}>{children}</div>;
};
