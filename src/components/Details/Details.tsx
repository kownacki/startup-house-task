import React, { FC, useCallback, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { ROOT_PATH } from '../../constants';
import { usePortfolio } from '../../redux/selectors';
import { Company, CompanyDetails } from '../../types';
import { overview } from '../../utils/alphavantage';
import { DetailsMain } from './DetailsMain';

type DetailsParams = {
  companyIndex: string,
};

const Root = styled.div`
  margin-top: 30px;
`;

const ButtonContainer = styled.div`
  margin-bottom: 20px;
`;

const getCompany = (portfolio: Company[], companyIndex?: string) => {
  if (companyIndex && portfolio.length > 0) {
    return portfolio[Number(companyIndex)];
  }
  return undefined;
};

export const Details: FC = () => {
  const { companyIndex } = useParams<DetailsParams>();
  const dispatch = useDispatch();
  const portfolio = usePortfolio();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState<CompanyDetails>();

  const company = getCompany(portfolio, companyIndex);

  const getOverview = useCallback(async (symbol: string) => {
    setLoading(true);
    const result = await overview(symbol);
    if (result.isSuccess) {
      setDetails(result.details);
      setLoading(false);
    }
  }, [dispatch]);

  useEffect(() => {
    if (company) {
      getOverview(company.symbol);
    }
  }, [company]);

  return (
    <Root>
      <ButtonContainer>
        <Button variant="contained" component={Link} to={ROOT_PATH}>
          Go Back
        </Button>
      </ButtonContainer>
      {loading && (
        <CircularProgress />
      )}
      {!loading && (
        <DetailsMain
          company={company as Company}
          details={details as CompanyDetails}
        />
      )}
    </Root>
  );
};
