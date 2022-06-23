import fetchMock from 'jest-fetch-mock';
import { Company } from '../types';
import { search } from './alphavantage';
import { SearchResponseJson } from './alphavantageTypes';

describe('alphavantage', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  describe('search', () => {
    it('returns companies', async () => {
      const companySymbolStub = 'SYMBOL_STUB';
      const companyNameStub = 'NAME_STUB';
      const companiesStub: Company[] = [{ symbol: companySymbolStub, name: companyNameStub }];
      const queryStub = 'QUERY_STUB';
      const responseMock: SearchResponseJson = {
        bestMatches: [
          {
            '1. symbol': companySymbolStub,
            '2. name': companyNameStub,
          }
        ],
      }
      fetchMock.mockResponseOnce(JSON.stringify(responseMock), {status: 200});
      await expect(search(queryStub)).resolves.toEqual({isSuccess: true, companies: companiesStub});
    });

    it('returns fail when fetch failed', async () => {
      const queryStub = 'QUERY_STUB';
      fetchMock.mockResponseOnce('', {status: 400});
      await expect(search(queryStub)).resolves.toEqual({isSuccess: false});
    });
  });
});
