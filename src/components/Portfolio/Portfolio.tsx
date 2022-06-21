import React, { FC } from 'react';
import styled from 'styled-components';
import { CompaniesList } from './CompaniesList';
import { Heading } from '../common/Heading';

const Root = styled.div`
`;

export const Portfolio: FC = () => {
  return (
    <Root>
      <Heading>
        Your Portfolio
      </Heading>
      <CompaniesList></CompaniesList>
    </Root>
  );
};
