import React from 'react';

import { bem } from '../../utils/bem';
import './styles.css';

const b = bem('row');

type Props = {
  className?: string;
};

export const Row: React.FC<Props> = ({ children, className }) => {
  return <div className={b({}, className)}>{children}</div>;
};
