import { useState } from 'react';
import cx from 'classnames';
import { useTanyaSearchParamsState } from '../../hooks/useTanyaSearchParamsState';

const sortMenu = [
  {
    label: 'Release date ASC',
    sortBy: 'release_date',
    sortOrder: 'asc',
  },
  {
    label: 'Release date DESC',
    sortBy: 'release_date',
    sortOrder: 'desc',
  },
  {
    label: 'Rating ASC',
    sortBy: 'vote_average',
    sortOrder: 'asc',
  },
  {
    label: 'Rating DESC',
    sortBy: 'vote_average',
    sortOrder: 'desc',
  },
];

const getLabelOfSort = (sortBy: string, sortOrder: string): string | undefined =>
  sortMenu.find((item) => item.sortBy === sortBy && item.sortOrder === sortOrder)?.label;

export function SortFilter() {
  const [isOpen, setIsOpen] = useState(false);
  const [sort, setSort] = useTanyaSearchParamsState(['sortBy', 'sortOrder']);

  const handleOpenButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleSortItemClick = (sortByValue: string, sortOrderValue: string) => {
    setSort(() => ({
      sortBy: sortByValue,
      sortOrder: sortOrderValue,
    }));
  };

  return (
    <div>
      <button
        id="sortFilterButton"
        data-dropdown-toggle="sortFilter"
        className="inline-flex items-center px-4 py-2.5 text-center text-sm font-medium uppercase text-white hover:bg-zinc-700 focus:outline-none  "
        type="button"
        onClick={handleOpenButton}
      >
        {getLabelOfSort(sort.sortBy, sort.sortOrder)}
        <svg
          className="ml-1 h-4 w-4"
          aria-hidden="true"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        id="sortFilter"
        className={cx('absolute right-0 z-10  w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700', {
          hidden: !isOpen,
        })}
      >
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="sortFilterButton">
          {sortMenu.map(({ label, sortBy, sortOrder }) => (
            <li>
              <button
                type="button"
                className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={() => handleSortItemClick(sortBy, sortOrder)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
