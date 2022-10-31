import { GenreTab } from './GenreTab';

type GenreTabsProps = {
  items?: {
    id: string;
    title: string;
  }[];
  selectedItemId?: string;
};

export function GenreTabs({ items, selectedItemId }: GenreTabsProps) {
  return (
    <div className="border-b border-gray-200 text-center text-sm font-medium text-gray-500 dark:border-gray-700 dark:text-gray-400">
      <ul className="-mb-px flex flex-wrap">
        {items?.map((item) => (
          <GenreTab item={item} isSelected={item.id === selectedItemId} />
        ))}
      </ul>
    </div>
  );
}
