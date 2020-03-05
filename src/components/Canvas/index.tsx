import React from 'react';
import { bem } from '../../utils/bem';

import './styles.css';

const b = bem('canvas');

export const Canvas: React.FC<{}> = ({ children }) => {
  return (
    <div className={b()} tabIndex={-1}>
      <div className={b('wrapper')}>{children}</div>
    </div>
  );
};
