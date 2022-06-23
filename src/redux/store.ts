import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { reducer } from './reducer';

// todo use configureStore
export const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware),
);

export type RootState = ReturnType<typeof reducer>
