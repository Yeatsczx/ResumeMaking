import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Router from './router';
import { HashRouter } from 'react-router-dom';
import store from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <Router />
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<Provider store={store}><HashRouter><App /></HashRouter></Provider>);
