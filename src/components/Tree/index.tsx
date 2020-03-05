import React from 'react';
import { bem } from '../../utils/bem';
import { Row } from '../Row';

import './styles.css';

const b = bem('tree');

type TreeProps = {
  items: React.ReactNode[];
  reverse?: boolean;
  className?: string;
};

export const Tree = ({ items, className, reverse }: TreeProps) => {
  return (
    <div className={b({ reverse }, className)}>
      {items.map((item, index) => (
        <Row className={b('row')} key={index}>
          {item}
        </Row>
      ))}
    </div>
  );
};
