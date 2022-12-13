import { useParams } from 'react-router-dom';
import { MovieCard } from '../MovieCard/MovieCard';
import { useGetMoviesQuery } from '../../features/movies/moviesApi';
import { RouterParams } from '../../types/types';
import { useSearchParamsState } from '../../hooks/useSearchParamsState';

export function MovieList() {
  const [searchParamsState] = useSearchParamsState('genre');

  const filter = decodeURIComponent(searchParamsState).split(',') ?? [];

  const params = useParams<RouterParams>();

  const search = params.searchQuery ? params.searchQuery : '';

  const { data = [] } = useGetMoviesQuery({ filter, search });

  return (
    <div className="mx-auto mb-24 max-w-2xl p-4 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((item) => (
          <MovieCard id={item.id} movie={item} />
        ))}
      </div>
    </div>
  );
}
