import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Amplify from 'aws-amplify';
import awsExports from './aws-exports';

Amplify.configure(awsExports);

// Find the root element in your HTML
const container = document.getElementById('root');

// Create a root.
const root = ReactDOM.createRoot(container);

// Render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

