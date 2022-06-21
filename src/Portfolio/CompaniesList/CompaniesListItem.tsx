import React, { FC } from 'react';
import ListItem from '@mui/material/ListItem';
import { Company } from '../../types';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItemText from '@mui/material/ListItemText';

export interface CompaniesListItemProps {
  company: Company,
  onRemove: () => void,
}

export const CompaniesListItem: FC<CompaniesListItemProps> = ({ company, onRemove }) => {
  return (
    <ListItem
      disableGutters
      secondaryAction={
        <IconButton
          aria-label="remove"
          onClick={() => onRemove()}
        >
          <DeleteIcon />
        </IconButton>
      }
    >
      <ListItemText primary={`${company.symbol} ${company.name}`} />
    </ListItem>
  );
};
