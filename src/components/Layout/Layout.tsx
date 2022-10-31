import { GenreTabs } from '../GenreTabs/GenreTabs';
import { HeroSection } from '../HeroSection/HeroSection';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { MovieList } from '../MovieList/MovieList';

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
    <div className="w-full ">
      <Header />
      <HeroSection />
      <GenreTabs items={GenreTabsItems} selectedItemId="2" />
      <MovieList />
      <Footer />
    </div>
  );
}
