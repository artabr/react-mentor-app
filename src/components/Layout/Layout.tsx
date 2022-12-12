import { useSearchParams } from 'react-router-dom';
import { GenreTabs } from '../GenreTabs/GenreTabs';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { MovieList } from '../MovieList/MovieList';
import { MainMenu } from '../MainMenu/MainMenu';
import { ErrorBoundary } from '../ErrorBoundary';
import { SortFilter } from '../SortFilter/SortFilter';
import { Modal } from '../Modal/Modal';
import { HeroSection } from '../HeroSection/HeroSection';
import { MoviePage } from '../MoviePage/MoviePage';

export function Layout() {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get('movie');

  return (
    <div className="w-full bg-zinc-800">
      <Header>
        <MainMenu />
        {movieId ? <MoviePage /> : <HeroSection />}
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
