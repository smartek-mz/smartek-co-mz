import React from 'react';
import { createRoot } from 'react-dom/client';
import AppRoutes from "./routes";
import './utils/i18n';

const container = document.getElementById('root');
if (!container) {
  throw new Error('Root container not found');
}

const root = createRoot(container);

root.render(
  <React.StrictMode>
    <AppRoutes  />
  </React.StrictMode>
);
