import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/theme.scss';
import { AppContextProvider } from './context/AppContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>
); 
