import { FC } from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { GetRoute } from './router/index';
import { Provider } from 'react-redux';
import store from './store/store';

const App: FC = () => {
  return (
    <div>
      <Provider store={store}>
        <HashRouter>
          <GetRoute />
        </HashRouter>
      </Provider>
    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(<App />);
