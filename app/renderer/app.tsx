import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Router from './router';
import { HashRouter } from 'react-router-dom';

function App() {
  return (
    <Router />
  );
}


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<HashRouter><App /></HashRouter>);
