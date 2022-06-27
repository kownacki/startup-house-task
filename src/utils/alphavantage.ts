import { ALPHAVANTAGE_API_URL} from '../constants';
import { Company, CompanyDetails } from '../types';
import {
  SearchBestMatchesItem,
  SearchResponseJson,
  SearchResult,
  SearchResultData,
  OverviewResponseJson,
  OverviewResult,
  OverviewResultData,
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

const parseSearchResponseJson = (responseJson: SearchResponseJson): SearchResultData => {
  // responseJson either consists of 'Note' or bestMatches array
  const bestMatches = responseJson.Note
    ? undefined
    : responseJson.bestMatches;
  return {
    companies: (bestMatches || []).map(parseSearchBestMatchesItem),
    note: responseJson.Note,
  } ;
};

const getDataFromSearchResponse = async (response: Response): Promise<SearchResultData> => {
  const json = await response.json() as SearchResponseJson;
  return parseSearchResponseJson(json);
};

export const search = async (query: string): Promise<SearchResult> => {
  const response = await fetch(createApiQueryUrl('SYMBOL_SEARCH', query));
  return response.status === 200
    ? {
      data: await getDataFromSearchResponse(response),
      isSuccess: true,
    }
    : {
      data: {},
      isSuccess: false,
    };
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
