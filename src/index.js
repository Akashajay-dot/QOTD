import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { GlobalStateProvider } from './Context/GlobalStateContext';


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="750538330021-pdrp24c966b212a398fvg2ndcc1fbngr.apps.googleusercontent.com">
      <GlobalStateProvider>
        <App />
      </GlobalStateProvider>
    </GoogleOAuthProvider>
    
  </React.StrictMode>
);

