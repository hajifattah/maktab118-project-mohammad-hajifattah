"use client";
import { getToken } from "@/utils/session-manager";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const PurchaseGuardProvider: React.FC<IChildren> = ({ children }) => {
  const [token, setToken] = useState<string>();
  const { push } = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = getToken();
      if (token === null) push("/login?isUser=true");
      setToken(token || undefined);
    }
  }, []);
  return token ? <>{children}</> : <></>;

};
