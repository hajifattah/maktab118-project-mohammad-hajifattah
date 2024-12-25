"use client";

interface IInput
  extends React.DetailedHTMLProps<
    React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  label: string;
  error?: string;
}

export const TextareaInput: React.FC<IInput> = ({ label, error, ...props }) => {
  return (
    <div>
      <label className="text-black/60 font-semibold text-sm md:text-base inline-block min-w-36">
        {label} :{" "}
      </label>
      <textarea
        className=" w-full border px-2 py-1 rounded-md focus-within:outline focus-within:outline-2 focus-within:outline-green-300"
        {...props}
      ></textarea>
      {error && (
        <p className="text-sm font-semibold text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
};
