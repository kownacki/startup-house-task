import {createStore, applyMiddleware} from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk'
import { SET_QUERY, SET_SEARCH_RESULT, ADD_TO_PORTFOLIO, REMOVE_FROM_PORTFOLIO } from './actionTypes';
import { Company } from '../types';

export interface StoreState {
  query?: string,
  searchResult: Company[],
  portfolio: Company[],
}

const initialState: StoreState  = {
  searchResult: [],
  portfolio: [],
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
    [ADD_TO_PORTFOLIO]: (
      state: StoreState,
      resp: {
        payload: Company,
      }
    ) => {
      return {
        ...state,
        portfolio: [...state.portfolio, resp.payload],
      };
    },
    [REMOVE_FROM_PORTFOLIO]: (
      state: StoreState,
      resp: {
        payload: { index: number },
      }
    ) => {
      const newPortfolio = [...state.portfolio];
      newPortfolio.splice(resp.payload.index, 1);
      return {
        ...state,
        portfolio: newPortfolio,
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
