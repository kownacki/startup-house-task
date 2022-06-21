import React, { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ROOT_PATH, DETAILS_PATH, MAIN_WIDTH } from './constants';
import { Details } from './Details';
import { Header } from './Header';
import { Landing } from './Landing';

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
        <Routes>
          <Route path={ROOT_PATH} element={<Landing />} />
          <Route path={`${DETAILS_PATH}/:companyIndex`} element={<Details />} />
        </Routes>
      </Main>
    </Root>
  );
};
