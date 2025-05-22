import { FC, PropsWithChildren } from 'react';
import cls from './scrollable.module.css';

type ScrollableProps = PropsWithChildren<{
  className?: string;
}>;

export const Scrollable: FC<ScrollableProps> = ({ className, children }) => {
  return <div className={`${cls.scroll} ${className ?? ''}`}>{children}</div>;
};
