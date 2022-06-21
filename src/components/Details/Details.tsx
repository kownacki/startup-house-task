import React, { FC, useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ROOT_PATH } from '../../constants';
import { usePortfolio } from '../../redux/selectors';
import { CompanyDetails } from '../../types';
import { overview } from '../../utils/alphavantage';

type DetailsParams = {
  companyIndex: string,
};

const Root = styled.div`
`;

export const Details: FC = () => {
  const { companyIndex } = useParams<DetailsParams>();
  const dispatch = useDispatch();
  const portfolio = usePortfolio();
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState<CompanyDetails>();

  const getOverview = useCallback(async (symbol: string) => {
    setLoading(true);
    const result = await overview(symbol);
    if (result.isSuccess) {
      setDetails(result.details);
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (companyIndex && portfolio.length > 0) {
      getOverview(portfolio[Number(companyIndex)].symbol);
    }
  }, [companyIndex, portfolio]);

  return (
    <Root>
      <Button variant="contained" component={Link} to={ROOT_PATH}>
        Go Back
      </Button>
      {loading && (
        <CircularProgress />
      )}
      {!loading && (
        <div>
          <div>{details?.marketCapitalization}</div>
          <div>{details?.description}</div>
        </div>
      )}
    </Root>
  );
};
