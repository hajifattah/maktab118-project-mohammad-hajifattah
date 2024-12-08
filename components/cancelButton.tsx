"use client";
export const CancelButton: React.FC<{ showMoadl: () => void }> = ({
  showMoadl,
}) => {
  return (
    <button
      onClick={showMoadl}
      type="button"
      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 sm:mt-0 "
    >
      انصراف
    </button>
  );
};
