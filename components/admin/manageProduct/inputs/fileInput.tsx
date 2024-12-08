"use client";
import { convertUrlToFile } from "@/apis/services/productsClient.service";
import { getProductImageSorce } from "@/utils/sorce-image";
import Image from "next/image";
import { ChangeEventHandler, useEffect } from "react";
import { Control, useController } from "react-hook-form";
import { TiDeleteOutline } from "react-icons/ti";

export const FileInput: React.FC<{
  name: keyof IProductForm;
  control: Control<IProductForm, any>;
  defaultImage: string[] | undefined;
}> = ({ name, control, defaultImage }) => {
  const {
    field,
    fieldState: { error },
  } = useController({ name, control });

  const changeHandle: ChangeEventHandler<HTMLInputElement> = (e) => {
    let filesArray: File[] = [];
    for (const file of e.target.files || []) {
      filesArray.push(file);
    }
    field.onChange([...field.value, ...filesArray]);
  };
  const deleteFile = (delIndex: number) => {
    if (Array.isArray(field.value)) {
      field.onChange(field.value.filter((_, index) => index !== delIndex));
    }
  };

  useEffect(() => {
    field.onChange([]);
  }, [control]);
  useEffect(() => {
    const setFiles = async () => {
      if (!defaultImage) return;
      const srcImageList = defaultImage.map((item) =>
        getProductImageSorce(item)
      );
      const files = await convertUrlToFile(srcImageList);
      field.onChange(files);
    };
    setFiles();
  }, [defaultImage]);
  return (
    <div className="border bg-blue_app rounded-md text-slate-100">
      <input
        id="fileInput"
        onChange={changeHandle}
        type="file"
        multiple
        className="hidden"
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5  gap-4 justify-center content-center p-4 ">
        <label
          htmlFor="fileInput"
          className="`w-full rounded-md text-sm text-grayApp text-center border-2 border-dashed p-4 sm:p-6 inline-block cursor-pointer "
        >
          برای آپلود عکس کلیک کنید
        </label>

        {Array.isArray(field.value) &&
          field.value.map((item, index) => (
            <div key={index} className={` relative `}>
              {" "}
              <div className="relative w-full aspect-square">
                <Image
                  alt="image"
                  className="rounded-md"
                  src={URL.createObjectURL(item)}
                  fill
                />
              </div>
              <h2 className="w-full truncate mt-1" dir="ltr">
                {item.name}
              </h2>
              <TiDeleteOutline
                onClick={() => deleteFile(index)}
                className="absolute top-0 right-0 cursor-pointer size-10"
              />
            </div>
          ))}
      </div>
      {error && (
        <p className="text-sm text-center font-semibold text-red-400 my-1">
          {error.message}
        </p>
      )}
    </div>
  );
};
