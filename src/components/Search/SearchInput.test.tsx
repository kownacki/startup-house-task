import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { debounce } from 'lodash';
import { useDispatch } from 'react-redux';
import { setQuery } from '../../redux/actions';
import { asMock } from '../../testutils/asMock';
import { Company } from '../../types';
import { search } from '../../utils/alphavantage';
import { SearchInput } from './SearchInput';

jest.mock('lodash');
jest.mock('react-redux');
jest.mock('../../redux/actions');
jest.mock('../../utils/alphavantage');

describe('SearchInput', () => {
  it('shows search results', async () => {
    const mockDispatch = jest.fn();
    asMock(useDispatch).mockReturnValue(mockDispatch);
    // I allowed myself to use ts-ignore here because choosing correct type for lodash debounce arg seems really hard,
    // and isn't actually beneficial as it's obvious it should just return what it gets.
    // @ts-ignore
    asMock(debounce).mockImplementation((fn) => fn);

    const companiesMock = [{} as Company];
    asMock(search).mockResolvedValue({
      data: {
        companies: companiesMock,
      },
      isSuccess: true,
    });

    render(<SearchInput />);

    const inputElement = screen.getByLabelText('Company Name');
    fireEvent.change(inputElement, { target: { value: 'test1' } });
    expect(setQuery).toBeCalledWith('test1');
    expect(mockDispatch).toBeCalled();
  });
});
