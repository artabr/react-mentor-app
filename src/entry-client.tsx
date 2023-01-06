import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';

const Root = document.getElementById('app');

ReactDOM.hydrateRoot(
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  Root!,
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
// eslint-disable-next-line no-console
console.log('hydrated');
