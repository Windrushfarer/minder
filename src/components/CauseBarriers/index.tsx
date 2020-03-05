import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../../redux/rootReducer';
import { Barrier } from '../Barrier';
import { Row } from '../Row';

export const CauseBarriers: React.FC<{}> = () => {
  const causeBarriers = useSelector((state: AppState) => state.commonCauseBarriers);
  const barriers = useSelector((state: AppState) => state.barriers);

  return (
    <Row>
      {causeBarriers.map(id => (
        <Barrier name={barriers[id].name} key={id} />
      ))}
    </Row>
  );
};
