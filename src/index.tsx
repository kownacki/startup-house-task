import dotenv from 'dotenv';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import { App } from './components/App';
import { store } from './redux/store';

dotenv.config();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
