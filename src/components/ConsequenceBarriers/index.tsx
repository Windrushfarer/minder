import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import { Barrier } from '../Barrier';
import { Row } from '../Row';

export const ConsequenceBarriers: React.FC<{}> = () => {
  const consequencesBarriers = useSelector((state: AppState) => state.commonConsequencesBarriers);
  const barriers = useSelector((state: AppState) => state.barriers);

  return (
    <Row>
      {consequencesBarriers.map(id => (
        <Barrier name={barriers[id].name} key={id} />
      ))}
    </Row>
  );
};
