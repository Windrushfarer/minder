import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Canvas } from '../Canvas';
import { Incident } from '../Incident';
import { fetchModel } from '../../redux/model/actions';
import { CauseBarriers } from '../CauseBarriers';
import { ConsequenceBarriers } from '../ConsequenceBarriers';
import { CausesTree } from '../CausesTree';
import { ConsequencesTree } from '../ConsequencesTree';

export const Model = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchModel(1));
  }, []);

  return (
    <Canvas>
      <CausesTree />
      <CauseBarriers />
      <Incident />
      <ConsequenceBarriers />
      <ConsequencesTree />
    </Canvas>
  );
};
