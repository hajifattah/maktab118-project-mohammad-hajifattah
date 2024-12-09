interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  error?: string;
  extraStyle?: string;
}
export const ProductInput: React.FC<IInput> = ({
  label,
  error,
  extraStyle,
  ...props
}) => {
  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={props.name}
          className="text-black/60 font-semibold text-sm md:text-base inline-block min-w-36"
        >
          {label} :{" "}
        </label>
      )}
      <input
        {...props}
        type="text"
        id={props.name}
        className={` ${
          extraStyle ? extraStyle : ""
        } rounded-md text-black bg-slate-100 px-2 border py-1 w-full focus:outline focus:outline-2 focus:outline-blue_app/70`}
      />
      {error && (
        <p className={` font-semibold  mt-1 ${label ? "text-red-900 text-sm" : "text-red-600 text-xs"}`}>{error}</p>
      )}
    </div>
  );
};
