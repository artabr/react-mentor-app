import { MovieCard } from '../MovieCard/MovieCard';
import { Movie } from '../../types/types';

type MovieListProps = {
  data: Movie[];
  onCardClick: (id?: string) => void;
};

export function MovieList({ data, onCardClick }: MovieListProps) {
  return (
    <div className="mx-auto mb-24 max-w-2xl p-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((item) => (
          <MovieCard id={item.id} movie={item} onCardClick={onCardClick} />
        ))}
      </div>
    </div>
  );
}
