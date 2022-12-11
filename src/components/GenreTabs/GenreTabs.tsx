import { GenreTab } from './GenreTab';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { clearFilterItems } from '../../features/filter/filterSlice';
import { genreTabsItems } from '../../mocks/mockData';

export function GenreTabs() {
  const filter = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();
  const items = [...genreTabsItems];

  const allItemsTab = {
    title: 'All',
  };

  const handleResetClick = () => {
    dispatch(clearFilterItems());
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
