import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      basename="/softswiss-test-task"
    >
      <App />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
