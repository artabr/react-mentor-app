import imgUrl from '../../assets/images/Pulp-Fiction1.png';
import { ContextMenu } from '../ContextMenu/ContextMenu';
import { Movie } from '../../types/types';

type MovieListProps = {
  id?: string;
  movie?: Movie;
  onDeleteClick?: () => void;
  onEditClick?: () => void;
  onCardClick: (id?: string) => void;
};

export function MovieCard({ id, movie, onDeleteClick, onEditClick, onCardClick }: MovieListProps) {
  const handleCardClick = () => {
    onCardClick(id);
  };

  return (
    <div className="max-w-sm dark:border-gray-700 dark:bg-gray-800">
      <div className="absolute p-5">
        <ContextMenu id={id} onDeleteClick={onDeleteClick} onEditClick={onEditClick} />
      </div>
      <img src={imgUrl} alt="" />
      <div className="p-5">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <a className="cursor-pointer" onClick={handleCardClick}>
          <h5 className="mb-2 text-2xl font-medium tracking-tight text-gray-200 dark:text-white">
            {movie?.title ?? 'Untitled movie'}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-400 dark:text-gray-400">{movie?.genre ?? 'No genre'}</p>
      </div>
    </div>
  );
}
