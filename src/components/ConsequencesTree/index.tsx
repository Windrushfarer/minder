import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import { Consequence } from '../Consequence';
import { Barrier } from '../Barrier';
import { Tree } from '../Tree';
import { bem } from '../../utils/bem';

import './styles.css';

const b = bem('consequences-tree');

export const ConsequencesTree: React.FC<{}> = () => {
  const consequences = useSelector((state: AppState) => state.consequences);
  const barriers = useSelector((state: AppState) => state.barriers);
  const treeItems = Object.values(consequences).map(cause => {
    const { barriers: causeBarriers, id, name } = cause;

    return (
      <React.Fragment key={id}>
        {causeBarriers.map(id => (
          <Barrier name={barriers[id].name} key={id} />
        ))}
        <Consequence name={name} />
      </React.Fragment>
    );
  });

  return <Tree items={treeItems} className={b()} reverse />;
};
