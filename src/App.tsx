import React, { FC } from 'react';
import styled from 'styled-components';
import { MAIN_WIDTH } from './contants';
import { Header } from './Header';

const Root = styled.div`
`;

const Main = styled.div`
  max-width: ${MAIN_WIDTH}px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const App: FC = () => {
  return (
    <Root>
      <Header />
      <Main>
      </Main>
    </Root>
  );
};
