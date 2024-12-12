const ProductsLayout: React.FC<IChildren> = ({ children }) => {
  return (
    <div>
      <div className="py-4 min-h-[calc(100vh-21rem)]">{children}</div>
    </div>
  );
};
export default ProductsLayout;
