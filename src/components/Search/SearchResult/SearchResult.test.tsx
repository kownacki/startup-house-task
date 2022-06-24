import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { useDispatch } from 'react-redux';
import { addToPortfolio } from '../../../redux/actions';
import { usePortfolio, useQuery, useSearchResult } from '../../../redux/selectors';
import { asMock } from '../../../testutils/asMock';
import { Company } from '../../../types';
import { SearchResult } from './SearchResult';

jest.mock('react-redux');
jest.mock('../../../redux/selectors');
jest.mock('../../../redux/actions');

describe('SearchResult', () => {
  it('shows search results', () => {
    const mockDispatch = jest.fn();
    asMock(useDispatch).mockReturnValue(mockDispatch);

    asMock(useQuery).mockReturnValue('QUERY_STUB');
    asMock(usePortfolio).mockReturnValue([]);
    asMock(useSearchResult).mockReturnValue([{symbol: 'SYMBOL_1'} as Company, {symbol: 'SYMBOL_2'} as Company]);

    render(<SearchResult />);

    const searchResult1 = screen.getByText(/SYMBOL_1/);
    const searchResult2 = screen.getByText(/SYMBOL_2/);
    expect(searchResult1).toBeInTheDocument();
    expect(searchResult2).toBeInTheDocument();
  });

  it('adds company to portfolio on click on add', () => {
    const mockDispatch = jest.fn();
    asMock(useDispatch).mockReturnValue(mockDispatch);

    asMock(useQuery).mockReturnValue('QUERY_STUB');
    asMock(usePortfolio).mockReturnValue([]);
    const companyMock = {symbol: 'SYMBOL_1'} as Company;
    asMock(useSearchResult).mockReturnValue([companyMock]);

    render(<SearchResult />);

    const addButton = screen.getByRole('button');
    fireEvent.click(addButton);
    expect(addToPortfolio).toBeCalledWith(companyMock);
    expect(mockDispatch).toBeCalled();
  });
});
