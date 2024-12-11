const SubCategoryPage: React.FC<INextPageParams<{ id: string }>> = async ({
  params,
}) => {
  const subCategoryId = (await params).id;
  return <h2>subcategory page {subCategoryId}</h2>;
};
export default SubCategoryPage;
