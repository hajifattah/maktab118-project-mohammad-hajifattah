export const FooterHelp: React.FC = () => {
  return (
    <div className="flex gap-x-14 mt-2 w-full sm:w-4/12 lg:w-3/12">
      <div>
        <h2 className="text-white font-semibold mb-2">حساب من</h2>
        <div className="text-sm text-gray-200 space-y-1 w-fit">
          <h2>حساب من</h2>
          <h2>تاریخچه سفارشات</h2>
          <h2>سبد خرید</h2>
        </div>
      </div>
      <div>
        <h2 className="text-white font-semibold mb-2">راهنمایی</h2>
        <div className="text-sm text-gray-200 space-y-1">
          <h2>درباره ما</h2>
          <h2>سوالات رایج</h2>
          <h2>قوانین وب سایت</h2>
        </div>
      </div>
    </div>
  );
};
