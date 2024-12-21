"use client";
import { getToken } from "@/utils/session-manager";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const PurchaseGuardProvider: React.FC<IChildren> = ({ children }) => {
  const { push } = useRouter();
  const token = getToken();

  useEffect(() => {
    if (token === null) {
      push("/login?isUser=true");
    }
  }, [token]);
  return token ? <>{children}</> : <></>;
};
