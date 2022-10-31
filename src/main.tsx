import { createRoot } from 'react-dom/client';

import './index.css';
import { SearchForm } from './components/SearchForm/SearchForm';
import { GenreTabs } from './components/GenreTabs/GenreTabs';
import { SimpleText } from './components/SimpleText/SimpleText';

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

const App = document.getElementById('root');
function Root() {
  return (
    <div className="absolute flex h-full w-full items-center justify-center bg-gray-200">
      <div className="flex flex-col space-y-10">
        <SearchForm />
        <GenreTabs items={GenreTabsItems} selectedItemId="2" />
        <SimpleText text="Hello, World!" />
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
createRoot(App!).render(<Root />);
