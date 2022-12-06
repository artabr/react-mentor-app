import { useState } from 'react';
import cx from 'classnames';
import { useModalContext } from '../../hooks/useModalContext';
import { DeleteMovie } from '../DeleteMovie/DeleteMovie';
import { EditMovie } from '../EditMovie/EditMovie';

type ContextMenuProps = {
  id?: string;
};

export function ContextMenu({ id = '' }: ContextMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { handleModal } = useModalContext();

  const handleOpenButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  const onEditClick = () => {
    handleModal(<EditMovie id={id} />, 'Edit Movie');
  };

  const onDeleteClick = () => {
    handleModal(<DeleteMovie id={id} />, 'Delete Movie');
  };

  return (
    <>
      <button
        id={`contextMenuButton${id}`}
        data-dropdown-toggle={`contextMenu${id}`}
        className="inline-flex items-center rounded-lg bg-zinc-700 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-zinc-800 focus:outline-none focus:ring-4 focus:ring-zinc-300 dark:bg-zinc-600 dark:hover:bg-zinc-700 dark:focus:ring-zinc-800"
        type="button"
        onClick={handleOpenButton}
      >
        <svg
          className="h-4 w-4"
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
        id={`contextMenu${id}`}
        className={cx('z-10  w-44 divide-y divide-gray-100 rounded bg-white shadow dark:bg-gray-700', {
          hidden: !isOpen,
        })}
      >
        <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby={`contextMenuButton${id}`}>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onEditClick}
            >
              Edit
            </a>
          </li>
          <li>
            <a
              href="#"
              className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              onClick={onDeleteClick}
            >
              Delete
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
