"use client";
import { getProductImageSorce } from "@/utils/sorce-image";
import Image from "next/image";
import { useState } from "react";

export const ProductImagesList: React.FC<{ imgList: string[] }> = ({
  imgList,
}) => {
  const [selected, setSelected] = useState<string>(imgList[0]);
  const changePic = (namePic: string) => {
    setSelected(namePic);
  };
  return (
    <>
      <div className="flex gap-x-3 justify-center xl:col-span-2 h-fit overflow-auto  ">
        <div className="w-1/6 flex flex-col gap-y-1 max-h-[70vw] sm:max-h-[63vw] md:max-h-[32rem] lg:max-h-[34vw] xl:h-[28vw] 2xl:max-h-[28rem]  overflow-y-auto">
          {imgList.map((item) => (
            <div
            key={item}
              onClick={() => changePic(item)}
              className={`relative w-full aspect-square border border-slate-100 ${
                selected === item ? "border !border-green-500" : ""
              } hover:border-green-500 hover:cursor-pointer`}
            >
              <Image
                src={getProductImageSorce(item)}
                alt="image"
                fill
                className="p-1 rounded-md "
              />
            </div>
          ))}
        </div>
        <div className="w-5/6 max-w-lg">
          <div className="relative aspect-square">
            <Image
              src={getProductImageSorce(selected || "")}
              alt="main_Image"
              fill
              className="p-1 rounded-md "
            />
          </div>
        </div>
      </div>
    </>
  );
};
