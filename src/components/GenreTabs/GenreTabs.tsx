import React, {FC} from "react";
import {GenreTab} from "./GenreTab";

type GenreTabsProps = {
    items?: {
        id: string;
        title: string;
    }[];
    selectedItemId?: string;
};

export const GenreTabs: FC<GenreTabsProps> = ({items, selectedItemId}: GenreTabsProps) => {
    return (
        <div
            className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                {items?.map((item) => <GenreTab item={item} isSelected={item.id === selectedItemId}/>)}
            </ul>
        </div>
    );
}