import { InputField } from '../InputField/InputField';
import { Textarea } from '../Textarea/Textarea';
import { SelectField } from '../SelectField/SelectField';

export function AddMovie() {
  return (
    <>
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
            <Textarea title="Overview" placeholder="Movie description" />
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
    </>
  );
}
