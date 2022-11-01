import cx from 'classnames';

type GenreTabProps = {
  item?: {
    id: string;
    title: string;
  };
  isSelected?: boolean;
};

export function GenreTab({ item, isSelected }: GenreTabProps) {
  return (
    <li className="mr-2">
      <a
        href="#"
        className={cx('inline-block p-4 uppercase border-b-2 ', {
          'border-transparent hover:text-white text-gray-300 hover:border-white dark:hover:text-gray-300': !isSelected,
          'border-red-600 text-red-600 active dark:text-red-500 dark:border-red-500': isSelected,
        })}
      >
        {item?.title}
      </a>
    </li>
  );
}
