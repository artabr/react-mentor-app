import { Outlet } from 'react-router-dom';
import { GenreTabs } from '../GenreTabs/GenreTabs';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { MovieList } from '../MovieList/MovieList';
import { MainMenu } from '../MainMenu/MainMenu';
import { ErrorBoundary } from '../ErrorBoundary';
import { SortFilter } from '../SortFilter/SortFilter';
import { Modal } from '../Modal/Modal';

export function Layout() {
  return (
    <div className="w-full bg-zinc-800">
      <Header>
        <MainMenu />
        <Outlet />
      </Header>
      <ErrorBoundary>
        <div className="flex justify-between border-b-2 border-gray-500 ">
          <GenreTabs />
          <SortFilter />
        </div>
        <MovieList />
      </ErrorBoundary>
      <Modal />
      <Footer />
    </div>
  );
}
