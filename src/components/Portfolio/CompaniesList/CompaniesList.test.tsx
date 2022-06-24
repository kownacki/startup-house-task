import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { removeFromPortfolio } from '../../../redux/actions';
import { usePortfolio } from '../../../redux/selectors';
import { asMock } from '../../../testutils/asMock';
import { Company } from '../../../types';
import { CompaniesList } from './CompaniesList';

jest.mock('react-redux');
jest.mock('../../../redux/selectors');
jest.mock('../../../redux/actions');

const MockCompaniesList = () => {
  return (
    <BrowserRouter>
      <CompaniesList />
    </BrowserRouter>
  );
};

describe('CompaniesList', () => {
  it('shows companies', () => {
    const mockDispatch = jest.fn();
    asMock(useDispatch).mockReturnValue(mockDispatch);

    asMock(usePortfolio).mockReturnValue([{symbol: 'SYMBOL_1'} as Company, {symbol: 'SYMBOL_2'} as Company]);

    render(<MockCompaniesList />);

    const company1 = screen.getByText(/SYMBOL_1/);
    const company2 = screen.getByText(/SYMBOL_2/);
    expect(company1).toBeInTheDocument();
    expect(company2).toBeInTheDocument();
  });

  it('removes company from portfolio on click on remove', () => {
    const mockDispatch = jest.fn();
    asMock(useDispatch).mockReturnValue(mockDispatch);

    const companyMock = {symbol: 'SYMBOL_1'} as Company;
    asMock(usePortfolio).mockReturnValue([companyMock]);

    render(<MockCompaniesList />);

    const removeButton = screen.getByRole('button');
    fireEvent.click(removeButton);
    expect(removeFromPortfolio).toBeCalledWith({ index: 0 });
    expect(mockDispatch).toBeCalled();
  });
});
