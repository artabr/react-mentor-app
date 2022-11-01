export function SearchForm() {
  return (
    <form className="flex items-center">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="search"
          className="block w-full rounded-lg border border-zinc-300 bg-zinc-700 p-2.5 pl-5 text-xl font-light text-zinc-50 opacity-75 focus:border-red-500 focus:ring-red-500  dark:border-zinc-600 dark:bg-zinc-700 dark:text-white dark:placeholder:text-zinc-400 dark:focus:border-red-500 dark:focus:ring-red-500"
          placeholder="What do you want to watch?"
          required
        />
      </div>
      <button
        type="submit"
        className="ml-2 inline-flex items-center rounded-lg border border-red-700 bg-red-700 py-2.5 px-5 text-xl font-light uppercase text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Search
      </button>
    </form>
  );
}
