import { useMatch, useNavigate } from 'react-router-dom';
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
import { useSearchParamsState } from '../../hooks/useSearchParamsState';

export function Layout() {
  const [searchParamsState] = useSearchParamsState('movie');
  const match = useMatch('/');
  const navigate = useNavigate();

  if (match) navigate('/search');

  return (
    <div className="w-full bg-zinc-800">
      <Header>
        <MainMenu />
        {searchParamsState ? <MoviePage /> : <HeroSection />}
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
