import { useState } from 'react';
import cx from 'classnames';

type SortFilterProps = {
  id?: string;
  onDeleteClick?: () => void;
  onEditClick?: () => void;
};

export function SortFilter({ id = '', onDeleteClick, onEditClick }: SortFilterProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div>
      <button
        id={`sortFilterButton${id}`}
        data-dropdown-toggle={`sortFilter${id}`}
        className="inline-flex items-center px-4 py-2.5 text-center text-sm font-medium uppercase text-white hover:bg-zinc-700 focus:outline-none  "
        type="button"
        onClick={handleOpenButton}
      >
        Release date
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
        id={`sortFilter${id}`}
        className={cx('absolute right-0 z-10  w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700', {
          hidden: !isOpen,
        })}
      >
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`sortFilterButton${id}`}>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onEditClick}
            >
              Release date
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onDeleteClick}
            >
              Rating
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
