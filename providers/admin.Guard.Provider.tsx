"use client";
import { getToken } from "@/utils/session-manager";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const AdminGuardProvider: React.FC<IChildren> = ({ children }) => {
  const { push } = useRouter();
    
  useEffect(() => {
    const token = getToken();
    const index = token?.indexOf("iad", 20);
    if (index === undefined || index === -1) return push("/login");
   return push("/orders");
  }, []);
  return <>{children}</>;
};
