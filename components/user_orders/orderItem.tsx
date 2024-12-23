import Image from "next/image";

export const UserOrdersItem: React.FC = () => {
  return (
    <div className="border border-gray-400 p-3 rounded-md bg-slate-200 max-w-screen-md mx-auto w-full">
      <h2 className="text-green_app text-center">تحویل داده شد</h2>
      <div className="flex justify-between">
        {" "}
        <h2 className="text-gray-500">زمان سفارش</h2>
        <p>22/5/2024</p>
      </div>
      <div className="flex justify-between">
        {" "}
        <h2 className="text-gray-500">قیمت کل</h2>
        <p>350000 تومان</p>
      </div>
      <div className="flex gap-x-4 border-t-2 border-gray-300 p-2 pt-4 mt-2 mx-auto overflow-x-auto w-[70vw] max-w-[42rem]">
        {[1, 2, 3, 4,5].map((image) => (
          <div
            key={image}
            className="relative group-hover:blur-sm w-full sm:w-[18%] sm:max-w-[13rem] min-w-16 md:min-w-28 lg:max-w-[5rem] xl:max-w-[13rem] aspect-square"
          >
            <Image
              alt="image"
              src={"/loginimage.jpg"}
              className="rounded-md "
              fill
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
};
