import React, { FC } from 'react';
import styled from 'styled-components';
import { CompaniesList } from './CompaniesList';

const Root = styled.div`
`;

export const Portfolio: FC = () => {
  return (
    <Root>
      <CompaniesList></CompaniesList>
    </Root>
  );
};
