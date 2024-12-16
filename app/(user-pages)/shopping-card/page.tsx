import { TotalShoppingDetails } from "@/components/shopping-card/totalDetail";
import { ShoppingCardList } from "@/containers/shopping-card/shoppingCardList";

const ShoppingCardPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-x-2">
      <ShoppingCardList />
      <TotalShoppingDetails/>
    </div>
  );
};
export default ShoppingCardPage;
