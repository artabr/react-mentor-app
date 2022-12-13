import { useForm } from 'react-hook-form';
import { InputField } from '../InputField/InputField';
import { Textarea } from '../Textarea/Textarea';
import { SelectField } from '../SelectField/SelectField';

type EditMovieProps = {
  id: string;
};

export function EditMovie({ id }: EditMovieProps) {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line no-console
  const onSubmit = (data) => console.log('Submitted form with data:', data);

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-6 p-6">
        <div className="text-white">Editing a movie with ID: {id}</div>
      </div>
      <div className="space-y-6 p-6">
        <div className="mb-6 grid gap-6 md:grid-cols-2">
          <div>
            <InputField title="Title" placeholder="Moana" register={register} />
          </div>
          <div>
            <InputField title="Release date" placeholder="Select Date" register={register} />
          </div>
          <div>
            <InputField title="Movie URL" placeholder="https://" register={register} />
          </div>
          <div>
            <InputField title="Rating" placeholder="7.8" register={register} />
          </div>
          <div>
            <SelectField title="Genre" placeholder="Select a genre" />
          </div>
          <div>
            <InputField title="Runtime" placeholder="minutes" register={register} />
          </div>
        </div>
        <div className="mb-6">
          <Textarea
            title="Overview"
            placeholder="Moana Waialiki is a sea voyaging enthusiast and the only daughter of a chief in a long line of navigators. When her island's fishermen can't catch any fish and the crops fail, she learns that the demigod Maui caused the blight by stealing the heart of the goddess, Te Fiti. The only way to heal the island is to persuade Maui to return Te Fiti's heart, so Moana sets off on an epic journey across the Pacific. The film is based on stories from Polynesian mythology."
          />
        </div>
      </div>
      <div className="flex items-center space-x-2 rounded-b p-6">
        <button
          data-modal-toggle="defaultModal"
          type="submit"
          className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
        >
          Submit
        </button>
        <button
          data-modal-toggle="defaultModal"
          type="button"
          className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-red-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-600"
        >
          Reset
        </button>
      </div>
    </form>
  );
}
