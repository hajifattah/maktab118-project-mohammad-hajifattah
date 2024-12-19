"use client";
import { getToken } from "@/utils/session-manager";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const AdminGuardProvider: React.FC<IChildren> = ({ children }) => {
  const { push } = useRouter();
  const token = getToken();
  const index = token?.indexOf("iad", 20);
    
  useEffect(() => {
    if (index === undefined || index === -1) push("/login");
  }, [token]);
  return index === 20 ? <>{children}</> : <></>;
};
