"use client";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import CartItem from "../../components/CartItem";
// hook must be called inside component; will use inside `CartPage`

export default function CartPage() {
  const { cart, increaseQty, decreaseQty } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="p-6">
        <h2 className="text-xl font-bold">Your cart is empty</h2>
        <Link href="/" className="text-blue-600 underline">
          Go back to shop
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>

   {cart.map((item) => (
  <CartItem
    key={item.id}
    item={item}
    increaseQty={increaseQty}
    decreaseQty={decreaseQty}
  />
))}



      <h2 className="mt-4 font-bold">
        Total: ₹{total}
      </h2>

      <Link
        href="/checkout"
        className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded"
      >
        Proceed to Checkout
      </Link>
    </div>
  );
}
