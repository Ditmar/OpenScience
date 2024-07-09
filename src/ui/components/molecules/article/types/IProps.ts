import type { ReactNode } from 'react';

export default interface IProps {
  children: ReactNode;
  format?: string;
  className?: string;
  date?: Date;
}
