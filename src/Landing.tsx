import React, { FC } from 'react';
import styled from 'styled-components';
import { useQuery } from './redux/selectors';
import { Search } from './Search';
import { Portfolio } from './Portfolio';

const Root = styled.div`
`;

export const Landing: FC = () => {
  const query = useQuery();

  return (
    <Root>
      <Search />
      <Portfolio />
      <div>
        { query }
      </div>
      <div>

      </div>
    </Root>
  );
};
