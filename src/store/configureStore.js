import {createStore, applyMiddleware} from 'redux';
import rootReducers from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

export default function configureStore(initialState) {
  return createStore(
    rootReducers,
    initialState,
    applyMiddleware(reduxImmutableStateInvariant())
  );
}
