import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Amplify imports
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsExports);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
