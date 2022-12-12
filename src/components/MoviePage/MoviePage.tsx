import { useSearchParams } from 'react-router-dom';
import { HeroMovieSection } from '../HeroMovieSection/HeroMovieSection';
import { useGetMovieByIdQuery } from '../../features/movies/moviesApi';

export function MoviePage() {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get('movie') ?? '';

  const { data } = useGetMovieByIdQuery(movieId);

  return <HeroMovieSection movie={data} />;
}
