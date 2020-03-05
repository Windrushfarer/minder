import { createReducer } from 'redux-act';
import { fetchModelSuccess } from '../model/actions';
import { CommonConsequencesBarriersState } from './types';

const initialState: CommonConsequencesBarriersState = [];

export const reducer = createReducer<CommonConsequencesBarriersState>({}, initialState);

reducer.on(fetchModelSuccess, (_, payload) => payload.model.commonConsequencesBarriers);
