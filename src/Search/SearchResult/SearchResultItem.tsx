import React, { FC } from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AddIcon from '@mui/icons-material/Add';
import IconButton from '@mui/material/IconButton';
import { Company } from '../../types';

export interface SearchResultItemProps {
  company: Company,
  onAdd: () => void,
}

export const SearchResultItem: FC<SearchResultItemProps> = ({ company, onAdd }) => {
  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton
          aria-label="add"
          onClick={() => onAdd()}
        >
          <AddIcon />
        </IconButton>
      }
    >
      <ListItemText primary={`${company.symbol} ${company.name}`} />
    </ListItem>
  );
};
