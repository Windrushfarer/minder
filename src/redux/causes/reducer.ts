import { createReducer } from 'redux-act';
import { fetchModelSuccess } from '../model/actions';
import { CausesState } from './types';

const initialState: CausesState = {};

export const reducer = createReducer<CausesState>({}, initialState);

reducer.on(fetchModelSuccess, (state, payload) => ({
  ...state,
  ...payload.model.causes,
}));
