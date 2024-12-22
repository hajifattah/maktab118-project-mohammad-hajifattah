"use client";
import { getToken } from "@/utils/session-manager";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export const UserLoginButton: React.FC = () => {
  const path = usePathname();
  const [isToken, setIsToken] = useState<boolean>(false);
  const [firstLoad, setFirstLoad] = useState<boolean>(true);
  const token = getToken();
  useEffect(() => {
    if (firstLoad) setFirstLoad(false);
    setIsToken(!!token);
  }, [path]);
  return (
    <Link
      href={"/login?isUser=true"}
      className={`self-center font-semibold hidden ${
       !firstLoad && !isToken ? "sm:block" : "hidden"
      }`}
    >
      <span className="hover:text-gray-600 text-sm"> ورود کاربر </span>
      <span>/</span>
    </Link>
  );
};
