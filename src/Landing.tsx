import React, { FC } from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';

const Root = styled.div`
`;

export const Landing: FC = () => {
  return (
    <Root>
      <TextField id="outlined-basic" label="Company Name" variant="outlined" />
    </Root>
  );
};
