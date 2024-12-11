import Link from "next/link";

export const SubCategory: React.FC<{
  subCatList: ISubCategory[];
  catId: string;
}> = ({ subCatList, catId }) => {
  return (
    <div>
      <ul className="grid sm:!grid-cols-3 grid-cols-1 text-center xs_app:text-start gap-y-1 gap-x-4 xs_app:grid-cols-2">
        {subCatList.map((subCat) => {
          return (
            subCat.category === catId && (
              <Link href={`/products/subcategory/${subCat._id}`}>
                <li
                  key={subCat._id}
                  className="hover:bg-gray-200 hover:text-black rounded-sm p-1"
                >
                  {subCat.name}
                </li>
              </Link>
            )
          );
        })}
      </ul>
    </div>
  );
};
