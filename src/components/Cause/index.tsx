import React from 'react';

import { bem } from '../../utils/bem';
import './styles.css';

const b = bem('cause');

type Props = {
  name: string;
};

export const Cause: React.FC<Props> = ({ name }) => {
  return <div className={b()}>{name}</div>;
};
