import {SET_QUERY} from './actionTypes';
import {SET_SEARCH_RESULT} from './actionTypes';
import { Company } from '../types';

export const setQuery = (payload: string) => ({ type: SET_QUERY, payload });
export const setSearchResult = (payload: Company[]) => ({ type: SET_SEARCH_RESULT, payload });
