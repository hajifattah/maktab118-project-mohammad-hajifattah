import Link from "next/link";

export const FooterHelp: React.FC = () => {
  return (
    <div className="flex gap-x-14 mt-2 w-full sm:w-4/12 lg:w-3/12">
      <div>
        <h2 className="text-white font-semibold mb-2">حساب من</h2>
        <div className="text-sm text-gray-200 space-y-1 w-fit">
          <Link href={"/user-profile"}>
            <h2>حساب من</h2>
          </Link>
          <Link href={"/shopping-card"}>
            <h2>سبد خرید</h2>
          </Link>
          <Link href={"/user-profile/orders"}>
            <h2>تاریخچه سفارشات</h2>
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-white font-semibold mb-2">راهنمایی</h2>
        <div className="text-sm text-gray-200 space-y-1">
          <Link href={"/about-us"}>
            <h2>درباره ما</h2>
          </Link>
          <h2>
            <button>سوالات رایج</button>
          </h2>
          <button>قوانین وب سایت</button>
        </div>
      </div>
    </div>
  );
};
