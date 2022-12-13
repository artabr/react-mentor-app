import { HeroMovieSection } from '../HeroMovieSection/HeroMovieSection';
import { useGetMovieByIdQuery } from '../../features/movies/moviesApi';
import { useSearchParamsState } from '../../hooks/useSearchParamsState';

export function MoviePage() {
  const [searchParamsState] = useSearchParamsState('movie');

  const { data } = useGetMovieByIdQuery(searchParamsState);

  return <HeroMovieSection movie={data} />;
}
