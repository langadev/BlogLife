import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ThemeProvider } from './context/ThemeContext.jsx';
import RoutesComponent from './routes/routes.jsx';
import { SearchProvider } from './context/searchContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <SearchProvider>
        <RoutesComponent />
      </SearchProvider>
    </ThemeProvider>
  </React.StrictMode>
);
