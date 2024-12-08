import { Control, Controller, UseFormSetValue } from "react-hook-form";
import { ProductSelectInput } from "./productSelectInput";
import { useEffect, useState } from "react";
import { GetSubCatAndCat } from "@/utils/fetch-cat-subCat";

export const CategoryAndSubCategory: React.FC<{
  control: Control<IProductForm, any>;
  setValue: UseFormSetValue<IProductForm>;
  twoDefault: {
    defCategory: string | undefined;
    defSubCategoy: string | undefined;
  };
}> = ({ control, setValue, twoDefault: { defCategory, defSubCategoy } }) => {
  const [category, setCategory] = useState<string>("");
  const [catAndSubCat, setCatAndSubCat] = useState<{
    subCatList: ISubCategory[];
    catList: ICategory[];
  }>();

  const setCategoryName = (cat: string) => {
    setValue("subCategory", "");
    setCategory(cat);
  };
  const categoryAndSubCategory = async () => {
    const catAndSubCat = await GetSubCatAndCat();
    setCatAndSubCat(catAndSubCat);
  };
  useEffect(() => {
    categoryAndSubCategory();
  }, []);
  return (
    <>
      {catAndSubCat && (
        <div className="flex flex-col sm:flex-row gap-x-4 gap-y-3">
          <Controller
            control={control}
            name="category"
            render={({ field, fieldState }) => {
              return (
                <ProductSelectInput
                  defaultValue={defCategory}
                  label="دسته اصلی"
                  setCat={setCategoryName}
                  list={catAndSubCat.catList}
                  {...field}
                  error={fieldState.error?.message}
                />
              );
            }}
          />
          <Controller
            control={control}
            name="subCategory"
            render={({ field, fieldState }) => {
              return (
                <ProductSelectInput
                  defaultValue={defSubCategoy}
                  label="زیر دسته"
                  list={
                    defCategory
                      ? catAndSubCat.subCatList.filter(
                          (item) => item.category === defCategory
                        )
                      : catAndSubCat.subCatList.filter(
                          (item) => item.category === category
                        )
                  }
                  {...field}
                  error={fieldState.error?.message}
                />
              );
            }}
          />
        </div>
      )}
    </>
  );
};
