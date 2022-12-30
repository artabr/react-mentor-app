import { SearchForm } from '../SearchForm/SearchForm';

export function HeroSection() {
  return (
    <div className="w-2/3 gap-8 py-12 px-4 sm:px-6 lg:flex lg:flex-col lg:justify-between lg:py-16 lg:px-8">
      <h2 className="text-3xl font-extralight uppercase tracking-wide text-white sm:text-4xl">
        <span className="block" data-testid="hero-section-title">
          Find your movie
        </span>
      </h2>
      <SearchForm />
    </div>
  );
}
