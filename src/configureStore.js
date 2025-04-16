import { combineReducers, legacy_createStore as createStore } from 'redux';
import { appReducer } from './reducers/appReducer';

export function configureStore() {
  const rootReducer = combineReducers({
    app: appReducer,
  });
  return createStore(rootReducer);
}
