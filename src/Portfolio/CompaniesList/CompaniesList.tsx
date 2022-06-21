import React, { FC, useCallback } from 'react';
import List from '@mui/material/List';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { removeFromPortfolio } from '../../redux/actions';
import { usePortfolio } from '../../redux/selectors';
import { CompaniesListItem } from './CompaniesListItem';

const Root = styled.div`
`;

export const CompaniesList: FC = () => {
  const dispatch = useDispatch();
  const portfolio = usePortfolio();

  const handleRemoveFromPortfolio = useCallback((index: number) => {
    dispatch(removeFromPortfolio({ index }));
  }, [dispatch]);

  return (
    <Root>
      <List>
        {portfolio.map((company, index) => (
          <CompaniesListItem
            key={company.symbol}
            company={company}
            index={index}
            onRemove={() => handleRemoveFromPortfolio(index)}
          />
        ))}
      </List>
    </Root>
  );
};
