"use client";

import { errorHandler } from "@/utils/error-handler";
import Link from "next/link";

const Error: React.FC<{ error: Error & { digest?: string } }> = (
  props
) => {
  errorHandler(props.error.message)
  return (
    <div className="font-bold text-center mt-10">
      مشکلی پیش آمده
      <p>{props.error.message}</p>
      <Link href={"/"} className="hover:text-slate-500">بازگشت به صفحه اصلی</Link>
      {/* <p>{props.error.stack}</p> */}
    </div>
  );
};

export default Error;
