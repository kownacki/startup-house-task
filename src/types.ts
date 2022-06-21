export interface AlphavantageBestMatchesItem {
  '1. symbol': string,
  '2. name': string,
}

export interface AlphavantageResponseJson {
  bestMatches: AlphavantageBestMatchesItem[],
}

export interface Company {
  symbol: string,
  name: string,
}
