import { Route, Routes } from 'react-router-dom';
import { MovieContextProvider } from './hooks/useMovieContext';
import { ModalContextProvider } from './hooks/useModalContext';
import { Layout } from './components/Layout/Layout';
import { RouterError } from './components/RouterError/RouterError';
import './index.css';

export function App() {
  return (
    <ModalContextProvider>
      <MovieContextProvider>
        <Routes>
          <Route path="/" element={<Layout />} errorElement={<RouterError />}>
            <Route path="search/:searchQuery" />
            <Route path="search" />
          </Route>
        </Routes>
      </MovieContextProvider>
    </ModalContextProvider>
  );
}
