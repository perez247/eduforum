import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import StateProvider from './store/StateProvider';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ENV } from './constants/general';

if (!ENV.isProduction) {
    const { worker } = require('./mocks/browser')
    worker.start()
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider>
      <Router>
        <Routes>
          <Route path='/*' element={<App />} />
        </Routes>
      </Router>
    </StateProvider>
  </React.StrictMode>
);

