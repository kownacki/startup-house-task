import React, { FC } from 'react';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import { Portfolio } from './Portfolio';
import { Search } from './Search';

const Root = styled.div`
  margin-top: 30px;
  display: flex;
`;

const Container = styled.div`
  padding: 0 20px;
  flex: 1;
`;

export const Landing: FC = () => {
  return (
    <Root>
      <Container>
        <Search />
      </Container>
      <Divider orientation="vertical" flexItem />
      <Container>
        <Portfolio />
      </Container>
    </Root>
  );
};
