import {SET_QUERY, SET_SEARCH_RESULT, ADD_TO_PORTFOLIO} from './actionTypes';
import { Company } from '../types';

export const setQuery = (payload: string) => ({ type: SET_QUERY, payload });
export const setSearchResult = (payload: Company[]) => ({ type: SET_SEARCH_RESULT, payload });
export const addToPortfolio = (payload: Company) => ({ type: ADD_TO_PORTFOLIO, payload });
