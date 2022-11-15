import cx from 'classnames';
import imgUrl from '../../assets/images/Pulp-Fiction1.png';
import { ContextMenu } from '../ContextMenu/ContextMenu';
import { Movie } from '../../types/types';
import { useMovieContext } from '../../hooks/useMovieContext';

type MovieListProps = {
  id?: string;
  movie?: Movie;
  onDeleteClick?: () => void;
  onEditClick?: () => void;
  onCardClick: (id?: string) => void;
};

export function MovieCard({ id, movie, onDeleteClick, onEditClick, onCardClick }: MovieListProps) {
  const { setSelectedMovieId } = useMovieContext();

  const handleCardClick = () => {
    if (id) setSelectedMovieId(id);
    onCardClick(id);
  };

  const { selectedMovieId } = useMovieContext();

  return (
    <div
      className={cx('max-w-sm dark:border-gray-700 dark:bg-gray-800', {
        'ring-4 ring-red-500 rounded-xl': selectedMovieId === id,
      })}
    >
      <div className="absolute p-5">
        <ContextMenu id={id} onDeleteClick={onDeleteClick} onEditClick={onEditClick} />
      </div>

      <div className="">
        {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */}
        <a className="cursor-pointer " onClick={handleCardClick}>
          <img src={imgUrl} alt="" />
          <h5 className="py-2.5 px-5 text-2xl font-medium tracking-tight text-gray-200 dark:text-white">
            {movie?.title ?? 'Untitled movie'}
          </h5>
        </a>
        <p className="mb-3 px-5 font-normal text-gray-400 dark:text-gray-400">{movie?.genre ?? 'No genre'}</p>
      </div>
    </div>
  );
}
