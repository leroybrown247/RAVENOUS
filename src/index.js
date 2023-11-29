import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/components/App/App';
import reportWebVitals from './reportWebVitals'
import './index.css';
import './global.module.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
