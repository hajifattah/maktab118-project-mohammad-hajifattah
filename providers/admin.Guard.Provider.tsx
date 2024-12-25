"use client";
import { getToken } from "@/utils/session-manager";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const AdminGuardProvider: React.FC<IChildren> = ({ children }) => {
  const [index, setIndex] = useState<number>();
  const { push } = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = getToken();
      const index = token?.indexOf("iad", 20);
      setIndex(index);
      if (index === undefined || index === -1) push("/login");
    }
  }, []);
  return index === 20 ? <>{children}</> : <></>;
};
