import cx from 'classnames';
import { useAppDispatch } from '../../hooks/redux';
import { toggleFilterItem } from '../../features/filter/filterSlice';

type GenreTabProps = {
  item?: {
    title: string;
    id?: string;
  };
  isSelected?: boolean;
  onItemClick?: (id?: string) => void;
};

export function GenreTab({ item, isSelected, onItemClick }: GenreTabProps) {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    if (item && onItemClick) {
      onItemClick(item?.id);
    }
    dispatch(toggleFilterItem(item?.id));
  };

  return (
    <li className="mr-2">
      <button
        type="button"
        className={cx('inline-block p-4 uppercase border-b-2 ', {
          'border-transparent hover:text-white text-gray-300 hover:border-white dark:hover:text-gray-300': !isSelected,
          'border-red-600 text-red-600 active dark:text-red-500 dark:border-red-500': isSelected,
        })}
        onClick={handleClick}
      >
        {item?.title}
      </button>
    </li>
  );
}
