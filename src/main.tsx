import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import './index.css';
import './i18n';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <Suspense fallback={<div className="flex h-screen items-center justify-center bg-[var(--bg)] text-[var(--accent)]">Loading...</div>}>
        <App />
      </Suspense>
    </HelmetProvider>
  </StrictMode>,
);
