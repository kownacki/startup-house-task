import {createStore, applyMiddleware} from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk'
import { SET_QUERY, SET_SEARCH_RESULT } from './actionTypes';
import { Company } from '../types';

export interface StoreState {
  query?: string,
  searchResult?: Company[],
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
    [SET_SEARCH_RESULT]: (
      state: StoreState,
      resp: {
        payload: Company[],
      }
    ) => {
      return {
        ...state,
        searchResult: resp.payload,
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
