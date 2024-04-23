import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.scss';

import { App } from './app';

const rootElement = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
