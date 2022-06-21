import React, { FC, useEffect, useState} from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';
import { search } from './utils/alphavantage';

const Root = styled.div`
`;

export const Landing: FC = () => {
  const [searchInputText, setSearchInputText] = useState('');

  useEffect(() => {
    console.log(searchInputText);
    (async () => {
      if (searchInputText) {
        const result = await search(searchInputText);
        console.log('result', result);
      }
    })();
  }, [searchInputText]);

  return (
    <Root>
      <TextField
        id="outlined-basic"
        label="Company Name"
        variant="outlined"
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchInputText(event.currentTarget.value)}
      />
      <div>
        { searchInputText }
      </div>
    </Root>
  );
};
