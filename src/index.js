import React from 'react';
import ReactDOM from "react-dom/client";
import './index.css';
import App from './App';
import { ContextProvidor } from './Context/Context';

import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextProvidor>
    <GoogleOAuthProvider clientId="976866070291-dc3gi9osqv2mffdas76gujd0jgqqnofr.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    </ContextProvidor>
  </React.StrictMode>
);