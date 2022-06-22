import React, { FC } from 'react';
import ListItem from '@mui/material/ListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS, DETAILS_PATH } from '../../../constants';
import { Company } from '../../../types';

export interface CompaniesListItemProps {
  company: Company,
  index: number,
  onRemove: () => void,
}

const StyledListItem = styled(ListItem)`
  background: ${COLORS.lightGrey};
`;

export const CompaniesListItem: FC<CompaniesListItemProps> = ({ company, index, onRemove }) => {
  return (
    <StyledListItem
      disablePadding
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
      <ListItemButton component={Link} to={`${DETAILS_PATH}/${index}`}>
        <ListItemText primary={`${company.symbol} ${company.name}`} />
      </ListItemButton>
    </StyledListItem>
  );
};
