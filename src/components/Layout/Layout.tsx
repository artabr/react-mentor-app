import { GenreTabs } from '../GenreTabs/GenreTabs';
import { HeroSection } from '../HeroSection/HeroSection';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { MovieList } from '../MovieList/MovieList';
import { MainMenu } from '../MainMenu/MainMenu';
import { ErrorBoundary } from '../ErrorBoundary';

const GenreTabsItems = [
  {
    id: '0',
    title: 'All',
  },
  {
    id: '1',
    title: 'Comedy',
  },
  {
    id: '2',
    title: 'Drama',
  },
  {
    id: '3',
    title: 'Crime',
  },
];

export function Layout() {
  return (
    <div className="w-full bg-zinc-800">
      <Header>
        <MainMenu />
        <HeroSection />
      </Header>
      <ErrorBoundary>
        <GenreTabs items={GenreTabsItems} selectedItemId="2" />
        <MovieList />
      </ErrorBoundary>
      <Footer />
    </div>
  );
}
