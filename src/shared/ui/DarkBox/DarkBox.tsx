import { FC, ReactNode } from 'react';
import clx from './darkBox.module.css';

type DarkBoxProps = {
  children: ReactNode;
  className?: string;
  onClick?(): void;
};
export const DarkBox: FC<DarkBoxProps> = ({ children, className, onClick }) => {
  return (
    <div className={`${clx.root} ${className ? className : ''}`} onClick={onClick}>
      {children}
    </div>
  );
};
