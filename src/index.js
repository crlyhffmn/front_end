import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import {userStore} from './userStore';
import {Provider} from "react-redux";

ReactDOM.render(
  <Provider store={userStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);