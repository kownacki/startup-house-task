import { useSelector } from 'react-redux';
import { RootState } from './store';

const selectQuery = (state: RootState) => state.query;
export const useQuery = () => useSelector(selectQuery);
