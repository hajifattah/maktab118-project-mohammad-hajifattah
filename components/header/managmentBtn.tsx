"use client";
import { getToken } from "@/utils/session-manager";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const ManagmentButton: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);
  const { push } = useRouter();
  const loginCheck = () => {
    const index = token?.indexOf("iad", 20);
    if (index === undefined || index === -1) return push("/login");
    push("/orders");
  };
  useEffect(() => {
    setToken(getToken() || null);
  }, []);
  return (
    <button onClick={loginCheck} className="font-semibold">
      مدیریت
    </button>
  );
};
