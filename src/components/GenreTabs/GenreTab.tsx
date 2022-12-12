import cx from 'classnames';
import { createSearchParams, useSearchParams } from 'react-router-dom';

type GenreTabProps = {
  item: {
    title: string;
    id?: string;
  };
  isSelected?: boolean;
  onItemClick?: (id?: string) => void;
};

export function GenreTab({ item, isSelected, onItemClick }: GenreTabProps) {
  const [, setSearchParams] = useSearchParams();

  const handleClick = () => {
    if (item && onItemClick) {
      onItemClick(item?.id);
    }
    if (item?.id) {
      setSearchParams((prev: URLSearchParams) => {
        const prevGenre = prev.get('genre');
        const prevGenreArray = prevGenre ? decodeURIComponent(prevGenre).split(',') : [];
        // if the item is present
        if (prevGenreArray.includes(item?.id ?? ''))
          return createSearchParams({
            genre: prevGenreArray.filter((f) => f !== item?.id).join(','),
          });
        // if the item is absent
        return createSearchParams({
          genre: [...prevGenreArray, item?.id].join(','),
        });
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
