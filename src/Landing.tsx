import React, { FC, useEffect, useState} from 'react';
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { search } from './utils/alphavantage';
import { setQuery } from './redux/actions';
import { useQuery } from './redux/selectors';

const Root = styled.div`
`;

export const Landing: FC = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const [searchInputText, setSearchInputText] = useState('');

  useEffect(() => {
    dispatch(setQuery(searchInputText));
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
        { query }
      </div>
    </Root>
  );
};
