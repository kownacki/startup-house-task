import { Company, CompanyDetails } from '../types';

export interface SearchBestMatchesItem {
  '1. symbol': string,
  '2. name': string,
}

export interface SearchResponseJson {
  bestMatches?: SearchBestMatchesItem[],
  Note?: string,
}

export interface SearchResultData {
  companies?: Company[],
  note?: string,
}

export interface SearchResult {
  data: SearchResultData,
  isSuccess: boolean,
}

export interface OverviewResponseJson {
  Address?: string,
  Description?: string,
  MarketCapitalization?: string,
  Note?: string,
}

export interface OverviewResultData {
  details?: CompanyDetails,
  note?: string,
}

export interface OverviewResult {
  data: OverviewResultData,
  isSuccess: boolean,
}
