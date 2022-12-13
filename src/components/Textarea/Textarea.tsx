type TextareaProps = {
  title: string;
  placeholder: string;
};

export function Textarea({ title, placeholder }: TextareaProps) {
  return (
    <>
      <label htmlFor="message" className="mb-2 block text-sm font-medium text-red-500">
        {title}
      </label>
      <textarea
        id="message"
        rows={4}
        className="block w-full rounded-lg border border-zinc-600 bg-zinc-700 p-2.5 text-sm text-white placeholder:text-gray-400 focus:border-red-500 focus:ring-red-500"
        placeholder={placeholder}
      />
    </>
  );
}
