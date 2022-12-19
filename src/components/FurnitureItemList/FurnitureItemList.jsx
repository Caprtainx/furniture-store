import './FurnitureItemList.css';

export default function FurnitureItemList({ furnitureItem, handleAddToOrder }) {
  return (
    <div className="MenuListItem">
      <div className="emoji flex-ctr-ctr">{furnitureItem.emoji}</div>
      <div className="name">{furnitureItem.name}</div>
      <div className="buy">
        <span>${furnitureItem.price.toFixed(2)}</span>
        <button className="btn-sm" onClick={() => handleAddToOrder(furnitureItem._id)}>
          ADD
        </button>
      </div>
    </div>
  );
}