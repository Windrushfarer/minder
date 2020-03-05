import { createAction } from 'redux-act';
import { Dispatch } from 'redux';
import { Model } from '../../types';
import { mock as modelMock } from '../../mocks/backend/model';

enum ModelActionTypes {
  FetchModel = 'MODEL/FETCH_MODELS',
  FetchModelSuccess = 'MODEL/FETCH_MODELS_SUCCESS',
  FetchModelError = 'MODEL/FETCH_MODELS_ERROR',
}

export const fetchModelStart = createAction<{ id: number }>(ModelActionTypes.FetchModel);
export const fetchModelError = createAction(ModelActionTypes.FetchModelError);
export const fetchModelSuccess = createAction<{ model: Model }>(ModelActionTypes.FetchModelSuccess);

export function fetchModel(id: number) {
  return function(dispatch: Dispatch) {
    dispatch(fetchModelStart({ id }));

    // Will be real API call
    return Promise.resolve(modelMock).then(model => {
      dispatch(fetchModelSuccess({ model }));
    });
  };
}
