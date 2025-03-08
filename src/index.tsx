import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from "./router";
import './utils/i18n';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container not found');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Router>
    <AppRouter  />
    </Router>
  </React.StrictMode>
);