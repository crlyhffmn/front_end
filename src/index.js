import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD

=======
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {configureStore} from '@reduxjs/toolkit';
>>>>>>> master
import { Provider } from 'react-redux';
import {userStore} from './userStore'





ReactDOM.render(
  <React.StrictMode>
    <Provider store={userStore}>
    <App />
    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
