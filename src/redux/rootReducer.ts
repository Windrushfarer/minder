import { combineReducers } from 'redux';
import { reducer as model, ModelState } from './model';
import { reducer as barriers, BarriersState } from './barriers';
import { reducer as causes, CausesState } from './causes';
import { reducer as consequences, ConsequencesState } from './consequences';
import { reducer as incident, IncidentState } from './incident';
import { reducer as commonCauseBarriers, CommonCauseBarriersState } from './commonCauseBarriers';
import {
  reducer as commonConsequencesBarriers,
  CommonConsequencesBarriersState,
} from './commonConsequencesBarriers';

export type AppState = {
  model: ModelState;
  barriers: BarriersState;
  causes: CausesState;
  incident: IncidentState;
  consequences: ConsequencesState;
  commonCauseBarriers: CommonCauseBarriersState;
  commonConsequencesBarriers: CommonConsequencesBarriersState;
};

export const rootReducer = combineReducers<AppState>({
  model,
  barriers,
  causes,
  consequences,
  incident,
  commonCauseBarriers,
  commonConsequencesBarriers,
});
