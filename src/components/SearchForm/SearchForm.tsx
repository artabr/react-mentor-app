import React, {FC} from "react";

export const SearchForm: FC = () => {
    return (
        <form className="flex items-center">
            <label htmlFor="search" className="sr-only">Search</label>
            <div className="relative w-full">
                <input type="text" id="search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-5 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                       placeholder="What do you want to watch?" required/>
            </div>
            <button type="submit"
                    className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-red-700 rounded-lg border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Search
            </button>
        </form>
    );
};
