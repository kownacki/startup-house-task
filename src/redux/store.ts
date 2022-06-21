import {createStore, applyMiddleware} from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk'
import { SET_QUERY } from './actionTypes';

export interface StoreState {
  query?: string,
}

const initialState: StoreState  = {
};

export const appReducer = createReducer(
  initialState,
  {
    [SET_QUERY]: (
      state: StoreState,
      resp: {
        payload: string,
      }
    ) => {
      return {
        ...state,
        query: resp.payload,
      };
    },
  },
);

// todo use configureStore
export const store = createStore(
  appReducer,
  applyMiddleware(thunkMiddleware),
);

export type RootState = ReturnType<typeof appReducer>
