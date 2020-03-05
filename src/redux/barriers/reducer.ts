import { createReducer } from 'redux-act';
import { fetchModelSuccess } from '../model/actions';
import { BarriersState } from './types';

const initialState: BarriersState = {};

export const reducer = createReducer<BarriersState>({}, initialState);

reducer.on(fetchModelSuccess, (state, payload) => ({
  ...state,
  ...payload.model.barriers,
}));
