import { useState } from 'react';
import { GenreTab } from './GenreTab';

type GenreTabsProps = {
  items?: {
    id: string;
    title: string;
  }[];
  selectedItemId?: string;
};

export function GenreTabs({ items, selectedItemId }: GenreTabsProps) {
  const [selectedId, setSelectedId] = useState(selectedItemId);

  const handleItemClick = (id: string) => {
    setSelectedId(id);
  };

  return (
    <div className="text-center text-sm font-medium text-gray-500 ">
      <ul className="-mb-px flex flex-wrap">
        {items?.map((item) => (
          <GenreTab onItemClick={handleItemClick} item={item} isSelected={item.id === selectedId} />
        ))}
      </ul>
    </div>
  );
}
