import Link from "next/link";

export const Pagination: React.FC<{
  totalPage: number;
  params: ISearchParams;
  inAdmin?: boolean;
}> = ({ totalPage, params, inAdmin = true }) => {
  const previous = (Number(params.page) - 1).toString();
  const next = (Number(params.page) + 1).toString();

  return (
    <div className="flex items-center flex-column flex-wrap md:flex-row justify-between overflow-x-auto ">
      <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8 ">
        <li>
          <Link
            href={`?${
              params.deliveryStatus
                ? new URLSearchParams({
                    deliveryStatus: params.deliveryStatus,
                    page: previous,
                    sort: params.sort,
                    limit: params.limit,
                  })
                : new URLSearchParams({
                    page: previous,
                    sort: params.sort,
                    limit: params.limit,
                  })
            }`}
          >
            <button
              disabled={params.page === "1"}
              className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight  border rounded-s-lg  ${
                inAdmin
                  ? "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white disabled:bg-gray-950 disabled:text-gray-400"
                  : "bg-gray-100 border-gray-400 text-gray-900 hover:bg-gray-600 hover:text-white disabled:bg-gray-300 disabled:text-gray-400"
              }`}
            >
              قبلی
            </button>
          </Link>
        </li>
        {[...Array(totalPage).keys()].map((item, index) => {
          return (
            <li key={index}>
              <Link
                href={`?${
                  params.deliveryStatus
                    ? new URLSearchParams({
                        deliveryStatus: params.deliveryStatus,
                        page: (item + 1).toString(),
                        sort: params.sort,
                        limit: params.limit,
                      })
                    : new URLSearchParams({
                        page: (item + 1).toString(),
                        sort: params.sort,
                        limit: params.limit,
                      })
                }`}
                className={`flex items-center justify-center px-3 h-8 leading-tight border ${
                  inAdmin
                    ? "border-gray-700 hover:bg-gray-700 hover:text-white"
                    : " border-gray-400  hover:bg-gray-600 hover:text-white"
                } ${
                  inAdmin
                    ? Number(params.page) === item + 1
                      ? "text-white bg-gray-700"
                      : "text-gray-400 bg-gray-800"
                    : Number(params.page) === item + 1
                    ? "text-white bg-gray-600"
                    : "text-gray-900 bg-gray-100"
                }
              `}
              >
                {item + 1}
              </Link>
            </li>
          );
        })}

        <li>
          <Link
            href={`?${
              params.deliveryStatus
                ? new URLSearchParams({
                    deliveryStatus: params.deliveryStatus,
                    page: next,
                    sort: params.sort,
                    limit: params.limit,
                  })
                : new URLSearchParams({
                    page: next,
                    sort: params.sort,
                    limit: params.limit,
                  })
            }`}
          >
            <button
              disabled={params.page === String(totalPage) || params.page === "1"}
              className={`flex items-center justify-center px-3 h-8 leading-tight border rounded-e-lg ${
                inAdmin
                  ? "bg-gray-800 border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white disabled:bg-gray-950 disabled:text-gray-400"
                  : "bg-gray-100 border-gray-400 text-gray-900 hover:bg-gray-600 hover:text-white disabled:bg-gray-300 disabled:text-gray-400"
              }`}
            >
              بعدی
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};
