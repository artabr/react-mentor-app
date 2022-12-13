import { FieldValues, UseFormRegister } from 'react-hook-form';

type InputFieldProps = {
  title: string;
  placeholder: string;
  register?: UseFormRegister<FieldValues>;
};

export function InputField({ title, placeholder, register }: InputFieldProps) {
  const registerMethods = register ? register(title, { required: true }) : {};

  return (
    <>
      <label htmlFor={title} className="mb-2 block text-sm font-medium text-red-500">
        {title}
      </label>
      <input
        {...registerMethods}
        type="text"
        id={title}
        className="block w-full rounded-lg border border-zinc-600 bg-zinc-700 p-2.5 text-sm text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500"
        placeholder={placeholder}
        required
      />
    </>
  );
}
