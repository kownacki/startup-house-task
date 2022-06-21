import React, { FC, useCallback, useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { setSearchResult } from '../redux/actions';
import { search } from '../utils/alphavantage';
import { Company } from '../types';

const Root = styled.div`
`;

// const searchCompanies = debounce((query, dispatch) => {
//   if (query !== "") {
//     searchProductsCall(query).then(payload => {
//       dispatch({ type: SOME_OTHER_TYPE, payload })
//     });
//     const result = await search(searchInputText);
//     console.log('result', result);
//     dispatch(setQuery(searchInputText));
//   }
// }, 200);

export const SearchInput: FC = () => {
  const dispatch = useDispatch();
  const [searchInputText, setSearchInputText] = useState('');

  const searchCompanies = useCallback(debounce(async (query: string) => {
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
        onChange={(event: React.ChangeEvent<HTMLInputElement>) => setSearchInputText(event.currentTarget.value)}
      />
      <div>
        { searchInputText }
      </div>
    </Root>
  );
};
