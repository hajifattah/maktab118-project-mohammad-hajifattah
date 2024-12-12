import Image from "next/image";
import Link from "next/link";

export const FooterInfo: React.FC = () => {
  return (
    <div className="w-full md:w-6/12 lg:w-3/12">
      <Link href={"/"} className="flex gap-x-1 p-1 items-end">
        <div className="relative size-9">
          <Image src={"/logo.svg"} alt="logo" fill />
        </div>
        <h2 className="text-green_app font-bold text-2xl">بازار روز</h2>
      </Link>
      <h2 className="text-sm text-gray-200">
        فروشگاه بازار روز تمام تلاش خود را می کند تا محصولات مرغوب و با کیفیت را
        در کمترین زمان ممکن به دست مشتریان عزیز برساند و جهت جلب رصایت مشتری
        تمامی ارسال های ما رایگان می باشد،هدف ما راحتی و رضایت مشتریان می باشد.
      </h2>
      <div className="flex text-gray-200 text-sm gapx underline mt-2">
        <span className="block font-semibold "> 22112211 -021 </span>
        <span className="block font-semibold mx-4"> یا </span>
        <span className="block font-semibold underline">
          bazarRoz@example.com
        </span>
      </div>
    </div>
  );
};
