import { useState } from 'react';
import { GenreTabs } from '../GenreTabs/GenreTabs';
import { HeroSection } from '../HeroSection/HeroSection';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { MovieList } from '../MovieList/MovieList';
import { MainMenu } from '../MainMenu/MainMenu';
import { ErrorBoundary } from '../ErrorBoundary';
import { AddMovie } from '../AddMovie/AddMovie';
import { EditMovie } from '../EditMovie/EditMovie';
import { genreTabsItems, movies } from '../../mocks/mockData';
import { DeleteMovie } from '../DeleteMovie/DeleteMovie';
import { SortFilter } from '../SortFilter/SortFilter';
import { HeroMovieSection } from '../HeroMovieSection/HeroMovieSection';
import { MovieContextProvider } from '../../hooks/useMovieContext';

export function Layout() {
  const [showAddMovieModal, setShowAddMovieModal] = useState(false);
  const [showEditMovieModal, setShowEditMovieModal] = useState(false);
  const [showDeleteMovieModal, setShowDeleteMovieModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleAddMovieClick = () => {
    setShowAddMovieModal((prevState) => !prevState);
  };

  const handleEditMovieClick = () => {
    setShowEditMovieModal((prevState) => !prevState);
  };

  const handleDeleteMovieClick = () => {
    setShowDeleteMovieModal((prevState) => !prevState);
  };

  const handleCardClick = (id?: string) => {
    if (id) setSelectedCard(id);
  };

  const handleReturnClick = () => {
    setSelectedCard(null);
  };

  return (
    <div className="w-full bg-zinc-800">
      <MovieContextProvider>
        <Header>
          <MainMenu onAddMovieClick={handleAddMovieClick} onReturnClick={handleReturnClick} />
          {selectedCard ? (
            <HeroMovieSection movie={movies.find((movie) => movie.id === selectedCard)} />
          ) : (
            <HeroSection />
          )}
        </Header>
        <ErrorBoundary>
          <div className="flex justify-between border-b-2 border-gray-500 ">
            <GenreTabs items={genreTabsItems} selectedItemId="2" />
            <SortFilter />
          </div>
          <MovieList
            data={movies}
            onEditClick={handleEditMovieClick}
            onDeleteClick={handleDeleteMovieClick}
            onCardClick={handleCardClick}
          />
        </ErrorBoundary>
        <AddMovie isShown={showAddMovieModal} onCloseModalClick={handleAddMovieClick} />
        <EditMovie isShown={showEditMovieModal} onCloseModalClick={handleEditMovieClick} />
        <DeleteMovie isShown={showDeleteMovieModal} onCloseModalClick={handleDeleteMovieClick} />
        <Footer />
      </MovieContextProvider>
    </div>
  );
}
