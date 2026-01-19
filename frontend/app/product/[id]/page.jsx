"use client";

import { useParams } from "next/navigation";
import products from "../../../data/products";
import { useCart } from "../../../context/CartContext";

export default function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const product = products.find(
    (p) => p.id === Number(id)
  );

  if (!product) {
    return <p className="p-6">Product not found</p>;
  }

  return (
    <div className="p-6 max-w-md mx-auto border rounded">
      <h1 className="text-2xl font-bold mb-2">
        {product.name}
      </h1>

      <p className="text-gray-600 mb-2">
        Category: {product.category}
      </p>

      <p className="mb-2">{product.description}</p>

      <p className="font-bold mb-4">
        Price: ₹{product.price}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
}
