import React from 'react';

import { bem } from '../../utils/bem';
import './styles.css';

const b = bem('barrier');

type Props = {
  name: string;
};

export const Barrier: React.FC<Props> = ({ name }) => {
  return <div className={b()}>{name}</div>;
};
