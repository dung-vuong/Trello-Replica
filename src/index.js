import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CacheProvider } from "@emotion/react";
import createCache from '@emotion/cache';

import App from './App';

export const muiCache = createCache({
  'key': 'mui',
  'prepend': true,
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CacheProvider value={muiCache}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </CacheProvider>
);