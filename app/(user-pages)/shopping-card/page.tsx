import { TotalShoppingDetailsCSR } from "@/components/shopping-card/totalDetail";
import { ShoppingCardListCSR } from "@/containers/shopping-card/shoppingCardList";

const ShoppingCardPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2">
      <ShoppingCardListCSR />
      <TotalShoppingDetailsCSR/>
    </div>
  );
};
export default ShoppingCardPage;
