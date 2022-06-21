import React, { FC, useCallback } from 'react';
import List from '@mui/material/List';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToPortfolio } from '../../../redux/actions';
import { useQuery, useSearchResult } from '../../../redux/selectors';
import { Company } from '../../../types';
import { SearchResultItem } from './SearchResultItem';
import { Heading } from '../../common/Heading';

const Root = styled.div`
`;

export const SearchResult: FC = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const searchResult = useSearchResult();

  const handleAddToPortfolio = useCallback((company: Company) => {
    dispatch(addToPortfolio(company));
  }, [dispatch]);

  return (
    <Root>
      {query && (
        <Heading>
          Search Results
        </Heading>
      )}
      <List>
        {searchResult.map((company) => (
          <SearchResultItem
            key={company.symbol}
            company={company}
            onAdd={() => handleAddToPortfolio(company)}
          />
        ))}
      </List>
    </Root>
  );
};
