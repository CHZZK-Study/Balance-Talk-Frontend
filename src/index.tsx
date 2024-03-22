import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import worker from './mocks/browser';
import store from './store';
import './styles/index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');
const root = ReactDOM.createRoot(rootElement);

if (process.env.NODE_ENV === 'development' && process.env.MSW) {
  worker
    .start({
      onUnhandledRequest: 'bypass',
    })
    .catch(() => {});
}

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);
