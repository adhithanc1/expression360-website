import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// Self-hosted fonts — no third-party CDN at runtime.
import '@fontsource/syne/500.css';
import '@fontsource/syne/700.css';
import '@fontsource/syne/800.css';
import '@fontsource/dm-sans/400.css';
import '@fontsource/dm-sans/500.css';

import './styles/index.css';
import App from './App';

const el = document.getElementById('root');
if (!el) throw new Error('Root element #root not found');

createRoot(el).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
