import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import { Layout } from './components/Layout/Layout';
import { store } from './store/store';

const App = document.getElementById('root');
function Root() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(App!).render(<Root />);
