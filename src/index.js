import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebFont from 'webfontloader';

import { ThemeProvider } from '@material-ui/styles';

import {
  CssBaseline,
  createMuiTheme,
} from '@material-ui/core';

import { ToastsProvider } from '@Lib/toasts';
import { FirebaseProvider } from '@Lib/firebase';

// import { makeServer } from './server';

const theme = createMuiTheme({
  palette: {
    type: 'light',
  },
  typography: {
    fontFamily: [
      'Titillium Web',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

// if (process.env.NODE_ENV === 'development') {
//   makeServer({ environment: 'development' });
// }

WebFont.load({
  google: {
    families: ['Titillium Web']
  }
});

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastsProvider>
        <FirebaseProvider config={firebaseConfig} appName='tracks-web'>
          <App />
        </FirebaseProvider>
      </ToastsProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
