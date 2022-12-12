import { useSearchParams } from 'react-router-dom';
import { GenreTab } from './GenreTab';
import { genreTabsItems } from '../../mocks/mockData';
import { useSearchParamsState } from '../../hooks/useSearchParamsState';

export function GenreTabs() {
  const [searchParams] = useSearchParams();
  const [, setSearchParamsState] = useSearchParamsState('genre', '');

  const filter = decodeURIComponent(searchParams.get('genre') ?? '').split(',') ?? [];

  const items = [...genreTabsItems];

  const allItemsTab = {
    title: 'All',
  };

  const handleResetClick = () => {
    setSearchParamsState('');
  };

  return (
    <div className="text-center text-sm font-medium text-gray-500 ">
      <ul className="-mb-px flex flex-wrap">
        <GenreTab onItemClick={handleResetClick} item={allItemsTab} isSelected={filter.length === 0} />
        {items?.map((item) => (
          <GenreTab item={item} isSelected={filter.includes(item.id)} />
        ))}
      </ul>
    </div>
  );
}
