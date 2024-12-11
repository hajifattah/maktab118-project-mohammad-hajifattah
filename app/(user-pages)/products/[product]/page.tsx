const ProductPage: React.FC<INextPageParams<{ product: string }>> = async ({
  params,
}) => {
  const productId = (await params).product;
  return <h2>product page gg {productId}</h2>;
};
export default ProductPage;
