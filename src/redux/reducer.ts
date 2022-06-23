import { createReducer } from '@reduxjs/toolkit';
import { Company } from '../types';
import { ADD_TO_PORTFOLIO, REMOVE_FROM_PORTFOLIO, SET_QUERY, SET_SEARCH_RESULT } from './actionTypes';

export interface StoreState {
  query?: string,
  searchResult: Company[],
  portfolio: Company[],
}

export const initialState: StoreState = {
  searchResult: [],
  portfolio: [],
};

export const reducer = createReducer(
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
