export const SubmitButton: React.FC<{
  text: string;
  bgColor: string;
  onClick? : ()=>void
}> = ({ text, bgColor,onClick }) => {
  return (
    <button
    onClick={onClick}
      className={`${bgColor} text-white px-3 py-2 mt-3 w-full rounded-md ${
        bgColor.includes("red") ? "hover:bg-red-400" : "hover:bg-green_app/70"
      }`}
      type="submit"
    >
      {text}
    </button>
  );
};
