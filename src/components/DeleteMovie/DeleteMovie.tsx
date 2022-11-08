import cx from 'classnames';

type DeleteMovieProps = {
  isShown: boolean;
  onCloseModalClick: () => void;
};

export function DeleteMovie({ isShown, onCloseModalClick }: DeleteMovieProps) {
  return (
    <div
      id="defaultModal"
      tabIndex={-1}
      aria-hidden="true"
      className={cx(
        'h-modal fixed inset-x-0 top-0 z-50 w-full overflow-y-auto overflow-x-hidden md:inset-0 md:h-full justify-center items-center flex backdrop-blur-sm',
        { hidden: !isShown },
      )}
    >
      <div className="relative h-full w-full max-w-2xl p-4 md:h-auto">
        <div className="relative rounded-lg bg-zinc-900 shadow">
          <div className="flex items-start justify-between rounded-t p-4">
            <h3 className="text-xl font-semibold text-white">Delete Movie</h3>
            <button
              type="button"
              className="ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-toggle="defaultModal"
              onClick={onCloseModalClick}
            >
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="space-y-6 p-6">
            <div className="text-white">Are you sure you want to delete this movie?</div>
          </div>
          <div className="flex items-center space-x-2 rounded-b p-6">
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
