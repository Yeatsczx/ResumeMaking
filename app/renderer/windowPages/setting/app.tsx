/*
 * @Description:
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-30 10:34:17
 * @LastEditTime: 2021-06-30 17:09:52
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import store from '@src/store/store';
import { Provider } from 'react-redux';
import Setting from './index';

function App() {
  return (
    <Provider store={store}>
      <Setting />
    </Provider>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
