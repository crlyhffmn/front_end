import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { userStore } from './userStore';

ReactDOM.render(
  <React.StrictMode>
    <Provider store ={userStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
