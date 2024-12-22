import { DetailedHTMLProps, InputHTMLAttributes } from "react";

interface IToggleInputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "onChange"
  > {
  onChange: (e: string) => void;
}

export const ToggleInput: React.FC<IToggleInputProps> = ({
  value,
  onChange,
  ...props
}) => {
  const changeHandle = (e: boolean) => {
    onChange?.(e ? "yes" : "no");
  };
  return (
    <>
      <label className="inline-flex items-center  cursor-pointer w-fit">
        <input
          defaultChecked={true}
          {...props}
          onChange={(e) => changeHandle(e.target.checked)}
          type="checkbox"
          checked={value === "yes" ? true : false}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
    </>
  );
};
