import React from 'react';

import { bem } from '../../utils/bem';
import './styles.css';

const b = bem('consequence');

type Props = {
  name: string;
};

export const Consequence: React.FC<Props> = ({ name }) => {
  return <div className={b()}>{name}</div>;
};
