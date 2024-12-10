import { FaApple, FaGooglePlay } from "react-icons/fa";

export const FooterApps: React.FC = () => {
  return (
    <div className="mt-2 w-6/12 lg:w-4/12 min-w-80">
      <h2 className="font-semibold text-white">
        دانلود اپ فروشگاه برای موبایل
      </h2>
      <div className="mt-1 flex gap-x-4">
      <div className="flex items-center gap-x-3 bg-[#333333] px-5 py-2 w-fit rounded-md">
        <FaApple className="text-gray-200 size-8" />
        <div>
          <h2 className="text-gray-400 text-xs">دانلود از</h2>
          <h2 className="text-gray-200  font-semibold"> اپ استور</h2>
        </div>
      </div>
      <div className="flex items-center gap-x-3 bg-[#333333] px-5 py-2 w-fit rounded-md">
        <FaGooglePlay className="text-gray-200 size-8" />
        <div>
          <h2 className="text-gray-400 text-xs">دانلود از</h2>
          <h2 className="text-gray-200  font-semibold">گوگل پلی</h2>
        </div>
      </div>
      </div>
    </div>
  );
};
