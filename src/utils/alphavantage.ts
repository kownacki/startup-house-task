import { ALPHAVANTAGE_API_URL} from '../constants';
import { Company, CompanyDetails } from '../types';
import { OverviewResponseJson, SearchBestMatchesItem, SearchResponseJson, SearchResult, OverviewResult} from './alphavantageTypes';

const parseSearchBestMatchesItem = (bestMatchesItem: SearchBestMatchesItem): Company => {
  return {
    symbol: bestMatchesItem['1. symbol'],
    name: bestMatchesItem['2. name'],
  };
};

const parseSearchResponseJson = (responseJson: SearchResponseJson): Company[] => {
  return responseJson.bestMatches.map(parseSearchBestMatchesItem) ;
};

const getCompaniesFromSearchResponse = async (response: Response): Promise<Company[]> => {
  const json = await response.json() as SearchResponseJson;
  return parseSearchResponseJson(json);
};

export const search = async (query: string): Promise<SearchResult> => {
  // todo use env
  const response = await fetch(`${ALPHAVANTAGE_API_URL}query?function=SYMBOL_SEARCH&keywords=${query}&apikey=${'5UID986T5QBYBMON'}`);
  return response.status === 200
    ? {companies: await getCompaniesFromSearchResponse(response), isSuccess: true}
    : {isSuccess: false}
};

const parseOverviewResponseJson = (responseJson: OverviewResponseJson): CompanyDetails => {
  return {
    description: responseJson.Description,
    marketCapitalization: responseJson.MarketCapitalization,
  };
};

const getDetailsFromOverviewResponse = async (response: Response): Promise<CompanyDetails> => {
  const json = await response.json() as OverviewResponseJson;
  return parseOverviewResponseJson(json);
};

export const overview = async (symbol: string): Promise<OverviewResult> => {
  // todo use env
  const response = await fetch(`${ALPHAVANTAGE_API_URL}query?function=OVERVIEW&symbol=${symbol}&apikey=${'5UID986T5QBYBMON'}`);
  return response.status === 200
    ? {details: await getDetailsFromOverviewResponse(response), isSuccess: true}
    : {isSuccess: false}
};
