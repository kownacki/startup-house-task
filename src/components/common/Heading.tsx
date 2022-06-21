import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';

const Root = styled.div`
  font-size: 18px;
`;

interface HeadingProps {
  children?: ReactNode,
}


export const Heading: FC<HeadingProps> = ({ children}) => {
  return (
    <Root>
      {children}
    </Root>
  );
};
