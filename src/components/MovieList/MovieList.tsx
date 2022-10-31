import { MovieCard } from '../MovieCard/MovieCard';

export function MovieList() {
  return (
    <div className="bg-white">
      <div className="mx-auto mb-24 max-w-2xl p-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </div>
    </div>
  );
}
