import { ALPHAVANTAGE_API_URL} from '../constants';
import { Company, CompanyDetails } from '../types';
import {
  OverviewResponseJson,
  SearchBestMatchesItem,
  SearchResponseJson,
  SearchResult,
  OverviewResult,
  OverviewResultData
} from './alphavantageTypes';

const createApiQueryUrl = (fun: 'SYMBOL_SEARCH' | 'OVERVIEW', query: string) => {
  const queryArgName = fun === 'SYMBOL_SEARCH' ? 'keywords' : 'symbol';
  return `${ALPHAVANTAGE_API_URL}query?function=${fun}&${queryArgName}=${query}&apikey=${process.env.ALPHAVANTAGE_API_KEY}`;
};

const parseSearchBestMatchesItem = (bestMatchesItem: SearchBestMatchesItem): Company => {
  return {
    symbol: bestMatchesItem['1. symbol'],
    name: bestMatchesItem['2. name'],
  };
};

const parseSearchResponseJson = (responseJson: SearchResponseJson): Company[] => {
  return (responseJson.bestMatches || []).map(parseSearchBestMatchesItem) ;
};

const getCompaniesFromSearchResponse = async (response: Response): Promise<Company[]> => {
  const json = await response.json() as SearchResponseJson;
  return parseSearchResponseJson(json);
};

export const search = async (query: string): Promise<SearchResult> => {
  const response = await fetch(createApiQueryUrl('SYMBOL_SEARCH', query));
  return response.status === 200
    ? {companies: await getCompaniesFromSearchResponse(response), isSuccess: true}
    : {isSuccess: false};
};

const parseOverviewResponseJson = (responseJson: OverviewResponseJson): OverviewResultData => {
  // responseJson either consists of 'Note' or company data
  const details = responseJson.Note
    ? undefined
    : {
      address: responseJson.Address,
      description: responseJson.Description,
      marketCapitalization: responseJson.MarketCapitalization,
    } as CompanyDetails;
  return {
    details,
    note: responseJson.Note,
  };
};

const getDataFromOverviewResponse = async (response: Response): Promise<OverviewResultData> => {
  const json = await response.json() as OverviewResponseJson;
  return parseOverviewResponseJson(json);
};

export const overview = async (query: string): Promise<OverviewResult> => {
  const response = await fetch(createApiQueryUrl('OVERVIEW', query));
  return response.status === 200
    ? {
      data: await getDataFromOverviewResponse(response),
      isSuccess: true,
    }
    : {
      data: {},
      isSuccess: false,
    };
};
