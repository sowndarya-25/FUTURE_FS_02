"use client";
import Link from "next/link";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="flex justify-between p-4 bg-black text-white">
      <Link href="/">Shop</Link>
      <Link href="/cart">Cart ({cart.length})</Link>
    </nav>
  );
}
