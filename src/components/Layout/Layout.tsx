import { useState } from 'react';
import { GenreTabs } from '../GenreTabs/GenreTabs';
import { HeroSection } from '../HeroSection/HeroSection';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { MovieList } from '../MovieList/MovieList';
import { MainMenu } from '../MainMenu/MainMenu';
import { ErrorBoundary } from '../ErrorBoundary';
import { genreTabsItems } from '../../mocks/mockData';
import { SortFilter } from '../SortFilter/SortFilter';
import { HeroMovieSection } from '../HeroMovieSection/HeroMovieSection';
import { MovieContextProvider } from '../../hooks/useMovieContext';
import { useGetMoviesQuery } from '../../features/movies/moviesApi';
import { useAppSelector } from '../../hooks/redux';
import { ModalContextProvider } from '../../hooks/useModalContext';
import { Modal } from '../Modal/Modal';

export function Layout() {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const filter = useAppSelector((state) => state.filter);

  const { data = [] } = useGetMoviesQuery(filter);

  const handleCardClick = (id?: string) => {
    if (id) setSelectedCard(id);
  };

  const handleReturnClick = () => {
    setSelectedCard(null);
  };

  return (
    <div className="w-full bg-zinc-800">
      <ModalContextProvider>
        <MovieContextProvider>
          <Header>
            <MainMenu onReturnClick={handleReturnClick} />
            {selectedCard ? (
              <HeroMovieSection movie={data.find((movie) => movie.id === selectedCard)} />
            ) : (
              <HeroSection />
            )}
          </Header>
          <ErrorBoundary>
            <div className="flex justify-between border-b-2 border-gray-500 ">
              <GenreTabs items={genreTabsItems} />
              <SortFilter />
            </div>
            <MovieList data={data} onCardClick={handleCardClick} />
          </ErrorBoundary>
          <Modal />
          <Footer />
        </MovieContextProvider>
      </ModalContextProvider>
    </div>
  );
}
