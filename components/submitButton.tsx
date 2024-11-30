export const SubmitButton: React.FC<{
  text: string;
  bgColor: string;
}> = ({ text, bgColor }) => {
  return (
    <button className={`${bgColor} text-white px-3 py-2 mt-3 w-full rounded-md`} type="submit">
      {text}
    </button>
  );
};
