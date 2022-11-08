import cx from 'classnames';
import { InputField } from '../InputField/InputField';
import { Textarea } from '../Textarea/Textarea';
import { SelectField } from '../SelectField/SelectField';

type EditMovieProps = {
  isShown: boolean;
  onCloseModalClick: () => void;
};

export function EditMovie({ isShown, onCloseModalClick }: EditMovieProps) {
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
            <h3 className="text-xl font-semibold text-white">Edit Movie</h3>
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
            <form data-bitwarden-watching="1">
              <div className="mb-6 grid gap-6 md:grid-cols-2">
                <div>
                  <InputField title="Title" placeholder="Moana" />
                </div>
                <div>
                  <InputField title="Release date" placeholder="Select Date" />
                </div>
                <div>
                  <InputField title="Movie URL" placeholder="https://" />
                </div>
                <div>
                  <InputField title="Rating" placeholder="7.8" />
                </div>
                <div>
                  <SelectField title="Genre" placeholder="Select a genre" />
                </div>
                <div>
                  <InputField title="Runtime" placeholder="minutes" />
                </div>
              </div>
              <div className="mb-6">
                <Textarea
                  title="Overview"
                  placeholder="Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology."
                />
              </div>
            </form>
          </div>
          <div className="flex items-center space-x-2 rounded-b p-6">
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Reset
            </button>
            <button
              data-modal-toggle="defaultModal"
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
