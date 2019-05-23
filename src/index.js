import React from 'react';
import { render } from 'react-dom';
import store from '../store';
import App from './components/App';
import { Provider } from 'react-redux';

render(
  <Provider store={store}>
    <App />,
    document.getElementById('root')
  </Provider>
);
