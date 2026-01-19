"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  return (
    <div className="border p-4 rounded">
      <h2 className="font-bold text-blue-600 underline">
        <Link href={`/product/${product.id}`}>
          {product.name}
        </Link>
      </h2>

      <p>₹{product.price}</p>
      <p className="text-sm text-gray-600">{product.category}</p>

      <button
        className="mt-2 bg-blue-600 text-white px-3 py-1 rounded"
        onClick={() => addToCart(product)}
      >
        Add to Cart
      </button>
    </div>
  );
}
