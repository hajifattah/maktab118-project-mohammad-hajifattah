"use client";

import { LegacyRef, useEffect, useRef } from "react";

export const Description: React.FC<{ info: string }> = ({ info }) => {
  const desc = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (desc.current) desc.current.innerHTML = info;
  }, []);
  return (
    <div ref={desc} className="text-sm sm:text-base text-gray-600">
    </div>
  );
};
