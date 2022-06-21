import React, { FC } from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput';
import { SearchResult } from './SearchResult';

const Root = styled.div`
`;

const SearchInputContainer = styled.div`
  margin-bottom: 20px;
`;

export const Search: FC = () => {
  return (
    <Root>
      <SearchInputContainer>
        <SearchInput />
      </SearchInputContainer>
      <SearchResult />
    </Root>
  );
};
