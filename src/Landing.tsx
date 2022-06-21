import React, { FC } from 'react';
import styled from 'styled-components';
import { useQuery } from './redux/selectors';
import { Search } from './Search';

const Root = styled.div`
`;

export const Landing: FC = () => {
  const query = useQuery();

  return (
    <Root>
      <Search />
      <div>
        { query }
      </div>
    </Root>
  );
};
