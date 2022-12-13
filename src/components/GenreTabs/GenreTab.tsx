import cx from 'classnames';
import { useSearchParamsState } from '../../hooks/useSearchParamsState';

type GenreTabProps = {
  item: {
    title: string;
    id?: string;
  };
  isSelected?: boolean;
  onItemClick?: (id?: string) => void;
};

export function GenreTab({ item, isSelected, onItemClick }: GenreTabProps) {
  const [, setSearchParamsState] = useSearchParamsState('genre');

  const handleClick = () => {
    if (item && onItemClick) {
      onItemClick(item?.id);
    }
    if (item?.id) {
      setSearchParamsState((prev) => {
        const prevGenreArray = prev ? decodeURIComponent(prev).split(',') : [];
        // if the item is present
        if (item?.id && prevGenreArray.includes(item?.id))
          return prevGenreArray.filter((f) => f !== item?.id).join(',');
        // if the item is absent
        return [...prevGenreArray, item?.id].join(',');
      });
    }
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
        {item.title}
      </button>
    </li>
  );
}
