import { FC } from 'react';
import * as ReactDOM from 'react-dom/client'; // TS中引入React和ReactDOM的方法import * as
import { Provider } from 'react-redux';
import store from '@src/store/store';
import Setting from './index';

const App: FC = () => {
  return (
    <Provider store={store}>
      <Setting />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
