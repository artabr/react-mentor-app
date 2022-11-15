import imgUrl from '../../assets/images/Pulp-Fiction1.png';
import { Movie } from '../../types/types';

type HeroMovieSectionProps = {
  movie?: Movie;
};

export function HeroMovieSection({ movie }: HeroMovieSectionProps) {
  return (
    <div className="w-2/3 gap-8 py-12 px-4 sm:px-6 lg:flex lg:flex-col lg:justify-between lg:py-16 lg:px-8">
      <div className="flex h-80 flex-row">
        <div className="">
          <img className="h-80" src={imgUrl} alt="" />
        </div>
        <div className="">
          <h2 className="text-3xl font-extralight uppercase tracking-wide text-white sm:text-4xl">
            <span className="block">{movie?.title ?? 'Untitled movie'}</span>
          </h2>
          <p className="mb-3 font-normal text-zinc-400">{movie?.description ?? 'No description'}</p>
        </div>
      </div>
    </div>
  );
}
