import { createReducer } from 'redux-act';
import { fetchModelSuccess } from '../model/actions';
import { CommonCauseBarriersState } from './types';

const initialState: CommonCauseBarriersState = [];

export const reducer = createReducer<CommonCauseBarriersState>({}, initialState);

reducer.on(fetchModelSuccess, (_, payload) => payload.model.commonCauseBarriers);
