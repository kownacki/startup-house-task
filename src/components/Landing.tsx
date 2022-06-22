import React, { FC } from 'react';
import Divider from '@mui/material/Divider';
import styled from 'styled-components';
import { RWD_BREAKPOINTS } from '../constants';
import { Portfolio } from './Portfolio';
import { Search } from './Search';

const StyledDivider = styled(Divider)`
`;

const Root = styled.div`
  margin-top: 30px;
  display: flex;
  
  ${StyledDivider}[orientation="horizontal"] {
    display: none;
  }

  @media (max-width: ${RWD_BREAKPOINTS[2]}px) {
    flex-direction: column;
    ${StyledDivider}[orientation="vertical"] {
      display: none;
    }
    ${StyledDivider}[orientation="horizontal"] {
      display: block;
    }
  }
`;

const SectionContainer = styled.div`
  padding: 0 20px;
  flex: 1;

  @media (max-width: ${RWD_BREAKPOINTS[2]}px) {
    padding: 20px 0;
  }
`;

export const Landing: FC = () => {
  return (
    <Root>
      <SectionContainer>
        <Search />
      </SectionContainer>
      <StyledDivider orientation="horizontal" flexItem />
      <StyledDivider orientation="vertical" flexItem />
      <SectionContainer>
        <Portfolio />
      </SectionContainer>
    </Root>
  );
};
