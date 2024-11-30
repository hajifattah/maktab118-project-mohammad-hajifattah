import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOffSharp } from "react-icons/io5";

interface IInput
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
  name: string;
  error?: string;
  type?: "text" | "password";
}
export const Input: React.FC<IInput> = ({
  label,
  name,
  error,
  type = "text",
  ...props
}) => {
  const [showPass, setShowPass] = useState<boolean>(false);
  return (
    <div>
      <label
        htmlFor={label}
        className="text-black/60 font-semibold text-sm md:text-base inline-block min-w-36"
      >
        {label} :{" "}
      </label>
      <div className="flex justify-between items-center border px-2 py-1 rounded-md focus-within:outline focus-within:outline-2 focus-within:outline-green-300">
        <input
          {...props}
          type={
            type === "text" ? "text" : showPass === true ? "text" : "password"
          }
          name={name}
          id={label}
          className="outline-none"
        />
        <FaEye
          onClick={() => setShowPass((prev) => !prev)}
          className={`${
            type == "password" && showPass === false ? "block" : "hidden"
          } fill-gray-400 hover:fill-gray-800 cursor-pointer`}
        />
        <IoEyeOffSharp
          onClick={() => setShowPass((prev) => !prev)}
          className={`${
            type == "password" && showPass === true ? "block" : "hidden"
          } fill-gray-400 hover:fill-gray-800 cursor-pointer`}
        />
      </div>
      {error && (
        <p className="text-sm font-semibold text-red-400 mt-1">{error}</p>
      )}
    </div>
  );
};
