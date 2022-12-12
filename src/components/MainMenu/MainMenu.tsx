import { Link, useNavigate } from 'react-router-dom';
import { useMovieContext } from '../../hooks/useMovieContext';
import { useModalContext } from '../../hooks/useModalContext';
import { AddMovie } from '../AddMovie/AddMovie';

type MainMenuProps = {
  onReturnClick?: () => void;
};

export function MainMenu({ onReturnClick }: MainMenuProps) {
  const { selectedMovieId, setSelectedMovieId } = useMovieContext();
  const { handleModal } = useModalContext();
  const navigate = useNavigate();

  const onAddMovieClick = () => {
    handleModal(<AddMovie />, 'Add Movie');
  };

  const handleReturnClick = () => {
    setSelectedMovieId('');
    navigate({
      search: '',
    });

    if (onReturnClick) onReturnClick();
  };

  return (
    <nav className="w-full px-2 py-2.5 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-2xl font-bold text-red-600 dark:text-white">
            movieroulette
          </span>
        </Link>
        <div className="flex h-16 md:order-2">
          {!selectedMovieId ? (
            <button
              type="button"
              className="mr-3 rounded-lg bg-zinc-700 px-5 py-2.5 text-center text-xl font-light uppercase text-white hover:bg-zinc-500 focus:outline-none focus:ring-4 focus:ring-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:focus:ring-zinc-800 md:mr-0"
              onClick={onAddMovieClick}
            >
              + Add Movie
            </button>
          ) : (
            <button
              type="button"
              className="mr-3 rounded-lg bg-zinc-700 px-5 py-2.5 text-center text-xl font-light uppercase text-white hover:bg-zinc-500 focus:outline-none focus:ring-4 focus:ring-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-500 dark:focus:ring-zinc-800 md:mr-0"
              onClick={handleReturnClick}
            >
              Return to search
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
