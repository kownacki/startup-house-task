import { useSelector } from 'react-redux';
import { RootState } from './store';

const selectQuery = (state: RootState) => state.query;
export const useQuery = () => useSelector(selectQuery);

const selectSearchResult = (state: RootState) => state.searchResult;
export const useSearchResult = () => useSelector(selectSearchResult);

const selectPortfolio = (state: RootState) => state.portfolio;
export const usePortfolio = () => useSelector(selectPortfolio);
