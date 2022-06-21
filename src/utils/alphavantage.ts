import { ALPHAVANTAGE_API_URL} from '../constants';
import { AlphavantageBestMatchesItem, AlphavantageResponseJson, Company } from '../types';

const parseBestMatchesItem = (bestMatchesItem: AlphavantageBestMatchesItem) => {
  return {
    symbol: bestMatchesItem['1. symbol'],
    name: bestMatchesItem['2. name'],
  };
};

const parseResponseJson = (responseJson: AlphavantageResponseJson) => {
  return responseJson.bestMatches.map(parseBestMatchesItem) ;
};

const getCompaniesFromResponse = async (response: Response): Promise<Company[]> => {
  const json = await response.json();
  return parseResponseJson(json);
};

interface SearchResult {
  companies?: Company[],
  isSuccess: boolean,
}

export const search = async (query: string): Promise<SearchResult> => {
  // todo use env
  const response = await fetch(`${ALPHAVANTAGE_API_URL}query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${'5UID986T5QBYBMON'}`);
  return response.status === 200
    ? {companies: await getCompaniesFromResponse(response), isSuccess: true}
    : {isSuccess: false}
};
