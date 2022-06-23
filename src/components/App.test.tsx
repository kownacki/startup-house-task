import React from 'react';
import { render } from '@testing-library/react';
import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import { App } from './App';

describe('App', () => {
  it('renders', () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <App />
      </Router>,
    )
  });
});
