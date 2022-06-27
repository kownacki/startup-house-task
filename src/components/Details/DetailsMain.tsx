import React, { FC } from 'react';
import styled from 'styled-components';
import { Company, CompanyDetails } from '../../types';
import { formatMarketCapitalization } from '../../utils/general';

const Root = styled.div`
`;

const Name = styled.h2`
`;

const SmallDetailsContainer = styled.div`
`;

const SmallDetailsContainerLabel = styled.span`
  font-weight: 700;
  margin-right: 5px;
`;

const DescriptionContainer = styled.div`
  margin: 20px 0;
`;

interface DetailsMainProps {
  company: Company,
  details?: CompanyDetails,
}

export const DetailsMain: FC<DetailsMainProps> = ({ company, details }) => {
  return (
    <Root>
      <Name>
        {company.name}
      </Name>
      <SmallDetailsContainer>
        <SmallDetailsContainerLabel>
          Address:
        </SmallDetailsContainerLabel>
        {details?.address || 'NOT FOUND'}
      </SmallDetailsContainer>
      <SmallDetailsContainer>
        <SmallDetailsContainerLabel>
          Market Capitalization:
        </SmallDetailsContainerLabel>
        {details?.marketCapitalization ? formatMarketCapitalization(Number(details.marketCapitalization)) : 'NOT FOUND'}
      </SmallDetailsContainer>
      <DescriptionContainer>
        {details?.description || 'DESCRIPTION NOT FOUND'}
      </DescriptionContainer>
    </Root>
  );
};
