import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MovieContextProvider } from './hooks/useMovieContext';
import { ModalContextProvider } from './hooks/useModalContext';
import { Layout } from './components/Layout/Layout';
import { store } from './store/store';
import { RouterError } from './components/RouterError/RouterError';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <RouterError />,
    children: [
      {
        path: 'search/:searchQuery',
      },
      {
        path: 'search',
      },
    ],
  },
]);

const App = document.getElementById('root');
function Root() {
  return (
    <Provider store={store}>
      <ModalContextProvider>
        <MovieContextProvider>
          <RouterProvider router={router} />
        </MovieContextProvider>
      </ModalContextProvider>
    </Provider>
  );
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(App!).render(<Root />);
