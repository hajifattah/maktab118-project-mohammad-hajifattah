"use client";
import { getToken } from "@/utils/session-manager";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const AdminGuardProvider: React.FC<IChildren> = ({ children }) => {
  const { push } = useRouter();
  const token = getToken();
  const loginCheck = () => {
    const index = token?.indexOf("iad", 20);
    if (index === undefined || index === -1) return push("/login");
    push("/orders");
  };
  useEffect(() => {
    loginCheck();

  }, []);
  return <>{children}</>;
};
