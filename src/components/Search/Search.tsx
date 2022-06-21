import React, { FC } from 'react';
import styled from 'styled-components';
import { SearchInput } from './SearchInput';
import { SearchResult } from './SearchResult';

const Root = styled.div`
`;

export const Search: FC = () => {
  return (
    <Root>
      <SearchInput />
      <SearchResult />
    </Root>
  );
};
