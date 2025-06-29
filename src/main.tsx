import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Index'; // Assuming your main component is in src/pages/Index.tsx
import './index.css'; // For your global CSS/Tailwind

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);