type SelectFieldProps = {
  title: string;
  placeholder: string;
};

export function SelectField({ title, placeholder }: SelectFieldProps) {
  return (
    <>
      <label htmlFor="countries" className="mb-2 block text-sm font-medium text-red-500 ">
        {title}
      </label>
      <select
        id="countries"
        className="block w-full rounded-lg border border-zinc-600 bg-zinc-700 p-2.5 text-sm text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500"
      >
        <option selected>{placeholder}</option>
        <option value="Comedy">Comedy</option>
        <option value="Drama">Drama</option>
        <option value="Thriller">Thriller</option>
        <option value="Crime">Crime</option>
      </select>
    </>
  );
}
