import Link from "next/link";

export const Pagination: React.FC = () => {
  return (
    <div
    className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4 min-h-full"
  >
    <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
      <li>
        <Link
          href=""
          className="flex items-center justify-center px-3 h-8 ms-0 leading-tight  border rounded-s-lg  bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          قبلی
        </Link>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight border bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          1
        </a>
      </li>
      <li>
        <a
          href="#"
          className="flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white"
        >
          بعدی
        </a>
      </li>
    </ul>
  </div>
  );
};
