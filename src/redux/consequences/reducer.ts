import { createReducer } from 'redux-act';
import { fetchModelSuccess } from '../model/actions';
import { ConsequencesState } from './types';

const initialState: ConsequencesState = {};

export const reducer = createReducer<ConsequencesState>({}, initialState);

reducer.on(fetchModelSuccess, (state, payload) => ({
  ...state,
  ...payload.model.consequences,
}));
