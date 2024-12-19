"use client";
import { getToken } from "@/utils/session-manager";
import { useRouter } from "next/navigation";

export const ManagmentButton: React.FC = () => {
  const { push } = useRouter();

  const loginCheck = () => {
    const token = getToken()
    const index = token?.indexOf("iad", 20);
    if (index === undefined || index === -1) return push("/login");
    push("/orders");
  };

  return (
    <button onClick={loginCheck} className="font-semibold">
      مدیریت
    </button>
  );
};
