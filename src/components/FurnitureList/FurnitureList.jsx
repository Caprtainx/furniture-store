import './FurnitureList.css';
import FurnitureListItem from '../FurnitureItemList/FurnitureItemList';

export default function FurnitureList({ furnitureItems, handleAddToOrder }) {
  const items = furnitureItems.map(item =>
    <FurnitureListItem
      key={item._id}
      furnitureItem={item}
      handleAddToOrder={handleAddToOrder}
    />
  );
  return (
    <main className="MenuList">
      {items}
    </main>
  );
}