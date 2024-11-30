interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
  error?: string;
}
export const InputProduct: React.FC<IInput> = ({ label, name,error ,...props}) => {
  return (
    <div>
      <label
        htmlFor={label}
        className="text-black/60 font-semibold text-sm md:text-base inline-block min-w-36"
      >
        {label} :{" "}
      </label>
      <input
      {...props}
        type="text"
        name={name}
        id={label}
        className="rounded-md text-black px-2 border py-1 w-full focus:outline focus:outline-green-300"
      />
     {error &&  <p className="text-sm font-semibold text-red-500">{error}</p>}
    </div>
  );
};