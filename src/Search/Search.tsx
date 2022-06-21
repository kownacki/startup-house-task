import React, { FC, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setQuery } from '../redux/actions';
import { search } from '../utils/alphavantage';

const Root = styled.div`
`;

export const Search: FC = () => {
  const dispatch = useDispatch();
  const [searchInputText, setSearchInputText] = useState('');

  useEffect(() => {
    dispatch(setQuery(searchInputText));
    (async () => {
      if (searchInputText) {
        const result = await search(searchInputText);
        console.log('result', result);
      }
    })();
  }, [dispatch, searchInputText]);

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
