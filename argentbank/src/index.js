import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import authReducer from './redux/authReducer';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(authReducer);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

reportWebVitals();
