"use client";
import { getToken } from "@/utils/session-manager";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const ManagmentButton: React.FC = () => {
  const { push } = useRouter();
  let token: string | null;
  const loginCheck = () => {
    const index = token?.indexOf("iad", 20);
    if (index === undefined || index === -1) return push("/login");
    push("/orders");
  };
  useEffect(() => {
    token = getToken();
  }, []);
  return (
    <button onClick={loginCheck} className="font-semibold">
      مدیریت
    </button>
  );
};
