import { useParams } from 'react-router-dom';
import { MovieCard } from '../MovieCard/MovieCard';
import { RouterParams } from '../../types/types';
import { useSearchParamsState } from '../../hooks/useSearchParamsState';

export function MovieList() {
  const [searchParamsState] = useSearchParamsState('genre');

  const filter = decodeURIComponent(searchParamsState).split(',') ?? [];

  const params = useParams<RouterParams>();

  const search = params.searchQuery ? params.searchQuery : '';

  const data = [
    {
      id: '337167',
      title: 'Fifty Shades Freed',
      tagline: search,
      vote_average: 6.1,
      vote_count: 1195,
      release_date: '2018-02-07',
      poster_path: 'https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg',
      overview:
        'Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.',
      budget: 55000000,
      revenue: 136906000,
      genres: filter,
      runtime: 106,
    },
  ];

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
