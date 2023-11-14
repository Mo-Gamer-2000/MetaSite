import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menus";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 hover:text-red-600 ">
      <Item Links={PRODUCTS} title="PRODUCTS" textColor="text-black" />
      <Item Links={RESOURCES} title="RESOURCES" textColor="text-black" />
      <Item Links={COMPANY} title="COMPANY" textColor="text-black" />
      <Item Links={SUPPORT} title="SUPPORT" textColor="text-black" />
    </div>
  );
};

export default ItemsContainer;
