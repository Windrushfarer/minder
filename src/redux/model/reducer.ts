import { createReducer } from 'redux-act';
import { ModelState } from './types';
import { fetchModelStart, fetchModelSuccess } from './actions';

const initialState: ModelState = {
  id: 0,
  isLoading: false,
};

export const reducer = createReducer<ModelState>({}, initialState);

reducer.on(fetchModelStart, (state, payload) => ({
  ...state,
  id: payload.id,
  isLoading: true,
}));

reducer.on(fetchModelSuccess, state => ({
  ...state,
  isLoading: false,
}));
