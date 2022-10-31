import { SearchForm } from '../SearchForm/SearchForm';

export function HeroSection() {
  return (
    <div className="bg-gray-50">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:flex lg:flex-col lg:items-center lg:justify-between lg:py-16 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block">Find your movie</span>
        </h2>
        <SearchForm />
      </div>
    </div>
  );
}
