import { Movie } from '../../types/types';

type HeroMovieSectionProps = {
  movie?: Movie;
};

export function HeroMovieSection({ movie }: HeroMovieSectionProps) {
  return (
    <div className="flex w-2/3 flex-col justify-between gap-8">
      <div className="flex flex-row gap-8">
        <div className="w-64 flex-none">
          <img className="aspect-poster w-64" src={movie?.poster_path} alt="" />
        </div>
        <div className="grow">
          <h2 className="text-3xl font-extralight uppercase tracking-wide text-white sm:text-4xl">
            <span className="block">{movie?.title ?? 'Untitled movie'}</span>
          </h2>
          <p className="mb-3 font-normal text-zinc-400">{movie?.overview ?? 'No description'}</p>
        </div>
      </div>
    </div>
  );
}
