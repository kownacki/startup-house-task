import React, { FC, useCallback } from 'react';
import List from '@mui/material/List';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToPortfolio } from '../../../redux/actions';
import { useSearchResult } from '../../../redux/selectors';
import { Company } from '../../../types';
import { SearchResultItem } from './SearchResultItem';

const Root = styled.div`
`;

export const SearchResult: FC = () => {
  const dispatch = useDispatch();
  const searchResult = useSearchResult();

  const handleAddToPortfolio = useCallback((company: Company) => {
    dispatch(addToPortfolio(company));
  }, [dispatch]);

  return (
    <Root>
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
