import React, { FC } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const Root = styled.div`
`;

export const Details: FC = () => {
  const params = useParams();

  return (
    <Root>
      { params.companyIndex }
    </Root>
  );
};
