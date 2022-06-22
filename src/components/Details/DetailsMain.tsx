import React, { FC } from 'react';
import styled from 'styled-components';
import { Company, CompanyDetails } from '../../types';

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
  details: CompanyDetails,
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
        {details.address}
      </SmallDetailsContainer>
      <SmallDetailsContainer>
        <SmallDetailsContainerLabel>
          Market Capitalization:
        </SmallDetailsContainerLabel>
        {details.marketCapitalization}
      </SmallDetailsContainer>
      <DescriptionContainer>
        {details.description}
      </DescriptionContainer>
    </Root>
  );
};
