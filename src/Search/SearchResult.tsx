import React, { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import styled from 'styled-components';
import { useSearchResult } from '../redux/selectors';

const Root = styled.div`
`;

export const SearchResult: FC = () => {
  const searchResult = useSearchResult();

  return (
    <Root>
      <List>
        {searchResult.map((company) => (
          <ListItem
            key={company.symbol}
            disableGutters
            secondaryAction={
              <IconButton aria-label="add">
                <AddIcon />
              </IconButton>
            }
          >
            <ListItemText primary={`${company.symbol} ${company.name}`} />
          </ListItem>
        ))}
      </List>
    </Root>
  );
};
