import './FurnitureList.css';
import MenuListItem from '../FurnitureItemList/FurnitureItemList';

export default function FurnitureList({ furnitureItems, handleAddToOrder }) {
  const items = furnitureItems.map(item =>
    <MenuListItem
      key={item._id}
      menuItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MenuList">
      {items}
    </main>
  );
}