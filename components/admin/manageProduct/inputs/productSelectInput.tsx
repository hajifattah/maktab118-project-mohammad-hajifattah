import {
  ChangeEventHandler,
  DetailedHTMLProps,
  SelectHTMLAttributes,
} from "react";

interface IInput
  extends DetailedHTMLProps<
    SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  label: string;
  error?: string;
  list: ISubCategory[] | ICategory[];
  setCat?: (value: string) => void;
}

export const ProductSelectInput: React.FC<IInput> = ({
  label,
  error,
  list,
  onChange,
  setCat,
  ...props
}) => {
  const onchangeHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    onChange ? onChange(e) : undefined;
    if (setCat) {
      setCat(e.target.value);
    }
  };
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
        onChange={onchangeHandler}
        id={props.name}
        className="rounded-md text-black bg-slate-100 px-2 border py-1 w-full focus:outline focus:outline-2 cursor-pointer focus:outline-blue_app/70"
      >
        <option value="">یک گزینه انتخاب نمایید</option>
        {list.map((item) => (
          <option key={item._id} value={item._id}>{item.name}</option>
        ))}
      </select>
      {error && (
        <p className="text-sm font-semibold text-red-900 mt-1">{error}</p>
      )}
    </div>
  );
};
