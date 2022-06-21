import { Company, CompanyDetails } from '../types';

export interface SearchBestMatchesItem {
  '1. symbol': string,
  '2. name': string,
}

export interface SearchResponseJson {
  bestMatches: SearchBestMatchesItem[],
}

export interface OverviewResponseJson {
  Description: string,
  MarketCapitalization: string,
}

export interface SearchResult {
  companies?: Company[],
  isSuccess: boolean,
}

export interface OverviewResult {
  details?: CompanyDetails,
  isSuccess: boolean,
}
