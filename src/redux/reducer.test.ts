import { Company } from '../types';
import { ADD_TO_PORTFOLIO, REMOVE_FROM_PORTFOLIO, SET_QUERY, SET_SEARCH_RESULT } from './actionTypes';
import { initialState, reducer } from './reducer';

describe('reducer', () => {
  it('SET_QUERY action test', () => {
    expect(
      reducer(initialState, {
        type: SET_QUERY,
        payload: 'QUERY_STUB',
      })
    ).toEqual({
      ...initialState,
      query: 'QUERY_STUB',
    });
  });

  it('SET_SEARCH_RESULT action test', () => {
    const companyStub = {} as Company;
    expect(
      reducer(initialState, {
        type: SET_SEARCH_RESULT,
        payload: [companyStub],
      })
    ).toEqual({
      ...initialState,
      searchResult: [companyStub],
    });
  });

  it('ADD_TO_PORTFOLIO action test', () => {
    const addedBeforeCompanyStub = {} as Company;
    const newCompanyStub = {} as Company;
    const testState = {
      ...initialState,
      portfolio: [...initialState.portfolio, addedBeforeCompanyStub]
    };
    expect(
      reducer(testState, {
        type: ADD_TO_PORTFOLIO,
        payload: newCompanyStub,
      })
    ).toEqual({
      ...testState,
      portfolio: [...testState.portfolio, newCompanyStub],
    });
  });

  it('REMOVE_FROM_PORTFOLIO action test', () => {
    const addedBeforeCompanyStub1 = {} as Company;
    const addedBeforeCompanyStub2 = {} as Company;
    const addedBeforeCompanyStub3 = {} as Company;
    const testState = {
      ...initialState,
      portfolio: [...initialState.portfolio, addedBeforeCompanyStub1, addedBeforeCompanyStub2, addedBeforeCompanyStub3]
    };
    expect(
      reducer(testState, {
        type: REMOVE_FROM_PORTFOLIO,
        payload: {index: 1},
      })
    ).toEqual({
      ...testState,
      portfolio: [...initialState.portfolio, addedBeforeCompanyStub1, addedBeforeCompanyStub3],
    });
  });
});
