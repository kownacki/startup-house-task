import React, { FC } from 'react';
import styled from 'styled-components';
import { HEADER_HEIGHT, MAIN_WIDTH } from './contants';

const Root = styled.header`
  border-bottom: solid 1px black;
  font-size: 30px;
  font-family: monospace;
  height: ${HEADER_HEIGHT}px;
  line-height: ${HEADER_HEIGHT}px;
`;

const Container = styled.div`
  max-width: ${MAIN_WIDTH}px;
  padding: 0 20px;
  margin: auto;
`;

export const Header: FC = () => {
  return (
    <Root>
      <Container>
        SDH Frontend Homework
      </Container>
    </Root>
  );
};
