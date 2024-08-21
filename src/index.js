import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './scss/theme.scss';
import { AppContextProvider } from './context/AppContext';
import MusicCozyTemp from './templates/MusicCozyTemp';
import ClassicTemplate from './templates/ClassicTemplate';
import App from './App';
import About from './pages/About';
import Report from './pages/Report';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <AppContextProvider>
        <Routes>
          <Route path="/" element={ <MusicCozyTemp /> }>
            <Route index element={<App />} />
          </Route>
          <Route path="/" element={<ClassicTemplate />}>
            <Route path="about" element={<About />} />
            <Route path="report" element={<Report />} />
          </Route>
        </Routes>
      </AppContextProvider> 
    </React.StrictMode>
  </BrowserRouter>
); 
