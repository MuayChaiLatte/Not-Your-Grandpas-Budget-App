import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

/*
PSEUDOCODE

  DISPLAYED VALUES
    Monthly Income: Input Interactable

    Monthly Outgoings: Input Interactable

    Total Monthly Available Funds: Calculated

    Weekly Available Funds: Calculated

    Week 1 Funds: Calculated Interactable

    Week 2 Funds: Calculated Interactable

    Week 3 Funds: Calculated Interactable

    Week 4 Funds: Calculated Interactable

*/
