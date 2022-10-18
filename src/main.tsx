import React, {FC} from 'react'
import {createRoot} from 'react-dom/client'

import './index.css'
import {Counter} from "./components/Counter/Counter";
import {SearchForm} from "./components/SearchForm/SearchForm";
import {GenreTabs} from "./components/GenreTabs/GenreTabs";
import {SimpleText} from "./components/SimpleText/SimpleText";

const GenreTabsItems = [{
    id: "0",
    title: "All"
},
    {
        id: "1",
        title: "Comedy"
    },
    {
        id: "2",
        title: "Drama"
    },
    {
        id: "3",
        title: "Crime"
    }];

const App = document.getElementById('root')
const Root: FC = () => {
    return (
        <div className="absolute h-full w-full flex items-center justify-center bg-gray-200">
            <div className="flex flex-col space-y-10">
                <Counter/>
                <SearchForm/>
                <GenreTabs items={GenreTabsItems} selectedItemId="2"/>
                <SimpleText text="Hello, World!"/>
            </div>
        </div>
    )
}

createRoot(App!).render(<Root/>)
