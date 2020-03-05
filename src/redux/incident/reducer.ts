import { createReducer } from 'redux-act';
import { fetchModelSuccess } from '../model/actions';
import { IncidentState } from './types';

const initialState: IncidentState = {
  name: '',
};

export const reducer = createReducer<IncidentState>({}, initialState);

reducer.on(fetchModelSuccess, (state, payload) => ({
  ...state,
  name: payload.model.incident.name,
}));
