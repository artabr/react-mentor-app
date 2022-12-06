type DeleteMovieProps = {
  id: string;
};

export function DeleteMovie({ id }: DeleteMovieProps) {
  const onDeleteClick = () => {
    // eslint-disable-next-line no-console
    console.log('Delete movie with ID:', id);
  };

  return (
    <>
      <div className="space-y-6 p-6">
        <div className="text-white">Are you sure you want to delete this movie?</div>
      </div>
      <div className="flex items-center space-x-2 rounded-b p-6">
        <button
          data-modal-toggle="defaultModal"
          type="button"
          className="rounded-lg bg-red-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          onClick={onDeleteClick}
        >
          Delete
        </button>
      </div>
    </>
  );
}
