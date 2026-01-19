"use client";

export default function CartItem({
  item,
  increaseQty,
  decreaseQty,
}) {
  return (
    <div className="flex justify-between items-center border-b py-2">
      <span>{item.name}</span>

      <div className="flex items-center gap-2">
        <button
          onClick={() => decreaseQty(item.id)}
          className="px-2 border"
        >
          −
        </button>

        <span>{item.qty}</span>

        <button
          onClick={() => increaseQty(item.id)}
          className="px-2 border"
        >
          +
        </button>
      </div>

      <span>₹{item.price * item.qty}</span>
    </div>
  );
}
