import React, { FC, useCallback, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import TextField from '@mui/material/TextField';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setQuery, setSearchResult } from '../../redux/actions';
import { search } from '../../utils/alphavantage';
import { Company } from '../../types';

const Root = styled.div`
`;

export const SearchInput: FC = () => {
  const dispatch = useDispatch();
  const [searchInputText, setSearchInputText] = useState('');

  const searchCompanies = useCallback(debounce(async (query: string) => {
    dispatch(setQuery(query));
    if (query) {
      const result = await search(query);
      if (result.isSuccess) {
        dispatch(setSearchResult(result.companies as Company[]));
      }
    }
  }, 300), [dispatch]);

  useEffect(() => {
    if (searchInputText) {
      searchCompanies(searchInputText);
    }
  }, [searchCompanies, searchInputText]);

  return (
    <Root>
      <TextField
        id="outlined-basic"
        label="Company Name"
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchInputText(event.currentTarget.value)}
      />
    </Root>
  );
};
