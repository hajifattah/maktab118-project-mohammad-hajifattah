import Image from "next/image";

export const ProductImagesList: React.FC = () => {
  return (
    <>
      <div className="flex gap-x-3 max-w-lg justify-center xl:col-span-2">
        <div className="w-1/6 flex flex-col ">
          <div className="relative w-full aspect-square hover:border hover:border-green-500 hover:cursor-pointer">
            <Image src={"/home/milk.png"} alt="image" fill className="p-1 rounded-md"/>
          </div>
          <div className="relative w-full aspect-square hover:border hover:border-green-500 hover:cursor-pointer">
            <Image src={"/home/milk.png"} alt="image" fill className="p-1 rounded-md"/>
          </div>
          <div className="relative w-full aspect-square hover:border hover:border-green-500 hover:cursor-pointer">
            <Image src={"/home/milk.png"} alt="image" fill className="p-1 rounded-md"/>
          </div>
        </div>
        <div className="w-5/6">
          <div className="relative w-full aspect-square">
            <Image src={"/home/softDrink.png"} alt="image" fill className="p-1 rounded-md"/>
          </div>
        </div>
      </div>
    </>
  );
};
