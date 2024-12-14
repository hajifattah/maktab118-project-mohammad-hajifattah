"use client";
import { useRouter } from "next/navigation";
import { ChangeEventHandler } from "react";

export const SortProducts: React.FC<ISearchParams> = ({ sort }) => {
  const { push } = useRouter();
  const onclickHandler: ChangeEventHandler<HTMLSelectElement> = (e) => {
    push(`?sort=${e.target.value}`);
  };
  return (
    <div className="flex flex-wrap justify-between items-center border-b-2 px-6 pb-1">
      <h2 className="font-semibold md:text-lg py-2  text-center">
        {`دسته بندی محصولات براساس: `}
      </h2>
      <select
        onChange={onclickHandler}
        value={sort || "-createdAt"}
        name="sort"
        id=""
        className="h-fit text-sm py-1 px-4 rounded-md hover:cursor-pointer focus:outline-none bg-black_app text-gray-200
      "
      >
        <option value="-createdAt">جدیدترین</option>
        <option value="-quantity">موجودی</option>
        <option value="-price">بیشترین قیمت</option>
        <option value="price">کمترین قیمت</option>
      </select>
    </div>
  );
};
