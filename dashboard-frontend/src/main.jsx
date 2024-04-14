import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import { configureStore } from '@reduxjs/toolkit';
import globalReducer from './state'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

const store = configureStore({
  reducer:{
    global:globalReducer
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
