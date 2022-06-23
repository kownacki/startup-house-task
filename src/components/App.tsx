import React, { FC } from 'react';
import {Provider} from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import styled from 'styled-components';
import { ROOT_PATH, DETAILS_PATH, MAIN_WIDTH } from '../constants';
import { store } from '../redux/store';
import { Details } from './Details';
import { Header } from './Header';
import { Landing } from './Landing';

const Main = styled.div`
  max-width: ${MAIN_WIDTH}px;
  padding: 0 20px;
  margin: 0 auto;
`;

export const App: FC = () => {
  return (
    <Provider store={store}>
      <Header />
      <Main>
        <Routes>
          <Route path={ROOT_PATH} element={<Landing />} />
          <Route path={`${DETAILS_PATH}/:companyIndex`} element={<Details />} />
        </Routes>
      </Main>
    </Provider>
  );
};
