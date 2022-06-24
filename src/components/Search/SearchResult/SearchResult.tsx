import React, { FC, useCallback } from 'react';
import List from '@mui/material/List';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addToPortfolio } from '../../../redux/actions';
import { usePortfolio, useQuery, useSearchResult } from '../../../redux/selectors';
import { Company } from '../../../types';
import { SearchResultItem } from './SearchResultItem';
import { Heading } from '../../common/Heading';

const Root = styled.div`
`;

const portfolioIncludesCompany = (portfolio: Company[], company: Company) => {
  return portfolio.find((portfolioCompany) => portfolioCompany.symbol === company.symbol);
};

export const SearchResult: FC = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const portfolio = usePortfolio();
  const searchResult = useSearchResult();

  const handleAddToPortfolio = useCallback((company: Company) => {
    if (!portfolioIncludesCompany(portfolio, company)) {
      dispatch(addToPortfolio(company));
    } else {
      alert('You cannot add the same company twice to your portfolio');
    }
  }, [dispatch, portfolio]);

  return (
    <Root>
      {query && (
        <Heading>
          Search Results: {searchResult.length}
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
