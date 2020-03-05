import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import { Cause } from '../Cause';
import { Barrier } from '../Barrier';
import { Tree } from '../Tree';
import { bem } from '../../utils/bem';

import './styles.css';

const b = bem('causes-tree');

export const CausesTree: React.FC<{}> = () => {
  const causes = useSelector((state: AppState) => state.causes);
  const barriers = useSelector((state: AppState) => state.barriers);
  const treeItems = Object.values(causes).map(cause => {
    const { barriers: causeBarriers, id, name } = cause;

    return (
      <React.Fragment key={id}>
        <Cause name={name} />
        {causeBarriers.map(id => (
          <Barrier name={barriers[id].name} key={id} />
        ))}
      </React.Fragment>
    );
  });

  return <Tree items={treeItems} className={b()} />;
};
