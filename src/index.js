import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap';
import './index.css';
import App from './App';
import {configureStore} from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import {userStore} from './userStore'





// const store = configureStore({
//   reducer: {
//     user: userReducer,
//   },
// });


ReactDOM.render(
  <React.StrictMode>
    <Provider store={userStore}>
    <App />
    
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

