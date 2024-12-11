const ProductsLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <div>
      <div className="py-4">{children}</div>
    </div>
  );
};
export default ProductsLayout;
