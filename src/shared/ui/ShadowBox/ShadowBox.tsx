import { FC, ReactNode } from 'react';
import clx from './shadowBox.module.css';

type Props = {
  children: ReactNode;
};

export const ShadowBox: FC<Props> = ({ children }) => {
  return <div className={clx.root}>{children}</div>;
};
