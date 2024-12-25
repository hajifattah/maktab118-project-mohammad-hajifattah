import { TotalShoppingDetailsCSR } from "@/components/shopping-card/totalDetail";
import { ShoppingCardListCSR } from "@/containers/shopping-card/shoppingCardList";

const ShoppingCardPage: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-2 md:min-h-[calc(100vh-26.7rem)] lg:min-h-[calc(100vh-21.7rem)]">
      <ShoppingCardListCSR />
      <TotalShoppingDetailsCSR/>
    </div>
  );
};
export default ShoppingCardPage;
