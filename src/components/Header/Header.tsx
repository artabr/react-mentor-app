export function Header() {
  return (
    <nav className="rounded border-gray-200 bg-white px-2 py-2.5 dark:bg-gray-900 sm:px-4">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <a href="https://epam.com/" className="flex items-center">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">movieroulette</span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="mr-3 rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
          >
            + Add Movie
          </button>
        </div>
      </div>
    </nav>
  );
}
