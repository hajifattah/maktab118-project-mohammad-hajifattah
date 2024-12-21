import {
  ChangeEventHandler,
  DetailedHTMLProps,
  SelectHTMLAttributes,
  useEffect,
} from "react";

interface IInput
  extends Omit<
    DetailedHTMLProps<
      SelectHTMLAttributes<HTMLSelectElement>,
      HTMLSelectElement
    >,
    "onChange"
  > {
  label: string;
  error?: string;
  list: ISubCategory[] | ICategory[];
  setCat?: (value: string) => void;
  onChange: (e: string) => void;
}

export const ProductSelectInput: React.FC<IInput> = ({
  label,
  error,
  list,
  onChange,
  setCat,
  defaultValue,
  ...props
}) => {
  const onchangeHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange?.(e.target.value);
    if (setCat) {
      setCat(e.target.value);
    }
  };
  useEffect(()=>{onChange?.(defaultValue as string)},[defaultValue])
  return (
    <div className="w-full">
      <label
        htmlFor={props.name}
        className="text-black/60 font-semibold text-sm md:text-base inline-block min-w-36"
      >
        {label} :
      </label>
      <select
        {...props}
        defaultValue={defaultValue}
        onChange={onchangeHandler}
        id={props.name}
        className="rounded-md text-black bg-slate-100 px-2 border py-1 w-full focus:outline focus:outline-2 cursor-pointer focus:outline-blue_app/70"
      >
        <option value="">یک گزینه انتخاب نمایید</option>
        {list.map((item) => (
          <option key={item._id} value={item._id}>
            {item.name}
          </option>
        ))}
      </select>
      {error && (
        <p className="text-sm font-semibold text-red-900 mt-1">{error}</p>
      )}
    </div>
  );
};
