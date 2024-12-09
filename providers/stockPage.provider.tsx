"use client";
import { createContext, Dispatch, SetStateAction, useState } from "react";

type PairStockContextType = {
  pairs: IPairIDs[];
  addToPairsList: (value: IPairIDs) => void;
  removePair: (id: string) => void;
};
export const PairStockContext = createContext<PairStockContextType>({
  pairs: [],
  addToPairsList: () => undefined,
  removePair: () => undefined,
});

export const PairStockProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [pairValues, setPairValues] = useState<IPairIDs[]>([]);
  const addToPairsList = (pair: IPairIDs) => {
    if (pairValues.find((item) => item.id === pair.id)) return;
    setPairValues((prev) => [...prev, pair]);
  };
  const removePair = (id: string) =>
    setPairValues((prev) => prev.filter((item) => item.id !== id));
  return (
    <PairStockContext.Provider
      value={{ pairs: pairValues, addToPairsList, removePair }}
    >
      {children}
    </PairStockContext.Provider>
  );
};
