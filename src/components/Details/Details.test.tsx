import React from 'react';
import { render, screen } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import { usePortfolio } from '../../redux/selectors';
import { asMock } from '../../testutils/asMock';
import { overview } from '../../utils/alphavantage';
import { formatMarketCapitalization } from '../../utils/general';
import { Details } from './Details';

jest.mock('react-router-dom');
jest.mock('../../utils/alphavantage');
jest.mock('../../redux/selectors');

describe('Details', () => {
  it('should load details', async () => {
    const marketCapStub = '12324242223223';
    asMock(overview).mockResolvedValue({
      data: {
        details: {
          address: 'ADDRESS_STUB',
          description: 'DESC_STUB',
          marketCapitalization: marketCapStub,
        },
      },
      isSuccess: true,
    });

    asMock(useParams).mockReturnValue({ companyIndex: '0' });
    const companyMock = {name: 'NAME_STUB', symbol: 'SYMBOL_1'};
    asMock(usePortfolio).mockReturnValue([companyMock]);

    render(<Details />);

    const name = await screen.findByText('NAME_STUB');
    const address = await screen.findByText('ADDRESS_STUB');
    const desc = await screen.findByText('DESC_STUB');
    const cap = await screen.findByText(formatMarketCapitalization(Number(marketCapStub)));
    expect(name).toBeInTheDocument();
    expect(address).toBeInTheDocument();
    expect(desc).toBeInTheDocument();
    expect(cap).toBeInTheDocument();
  });
});
