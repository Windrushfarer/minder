import { applyMiddleware, createStore, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { rootReducer } from './rootReducer';

export function configureStore() {
  const isProduction = process.env.NODE_ENV === 'production';

  const middlewares = [thunkMiddleware.withExtraArgument({})];
  const middlewareEnhancer = applyMiddleware(...middlewares);
  const enhancers = [middlewareEnhancer];
  const toggleDevTools = !isProduction ? composeWithDevTools : compose;

  // @ts-ignore
  const composedEnhancers = toggleDevTools(...enhancers);

  const store = createStore(rootReducer, {}, composedEnhancers);

  // @ts-ignore
  if (!isProduction && module.hot) {
    // @ts-ignore
    module.hot.accept('./rootReducer', () => store.replaceReducer(rootReducer));
  }

  return store;
}
