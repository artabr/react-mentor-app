import React, {FC} from "react";

import cx from 'classnames';

type GenreTabProps = {
    item?: {
        id: string;
        title: string;
    };
    isSelected?: boolean;
};

export const GenreTab: FC<GenreTabProps> = ({item, isSelected}: GenreTabProps) => {
    return (
        <li className="mr-2">
            <a href="#"
               className={cx("inline-block p-4 rounded-t-lg border-b-2 ",
                   {
                       "border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300": !isSelected,
                       "border-red-600 text-red-600 active dark:text-red-500 dark:border-red-500": isSelected
                   }
               )}>{item?.title}</a>

        </li>
    );
}