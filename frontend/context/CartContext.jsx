"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load cart (client only)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const stored = window.localStorage.getItem("cart");
    if (!stored) return;

    try {
      const parsed = JSON.parse(stored);
      if (!Array.isArray(parsed)) throw new Error("stored cart is not an array");

      const normalized = parsed.map((item) => ({
        // ensure minimal valid shape
        id: item?.id,
        name: item?.name ?? item?.title ?? "",
        price: Number(item?.price) || 0,
        qty: Number(item?.qty) > 0 ? Number(item?.qty) : 1,
        ...item,
      }));

      setCart(normalized);
    } catch {
      window.localStorage.removeItem("cart");
      setCart([]);
    }
  }, []);

  // Save cart
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      window.localStorage.setItem("cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage:", e);
    }
  }, [cart]);

  const addToCart = (product) => {
    if (!product || product.id == null) return;

    setCart((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: (p.qty || 0) + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };
  const increaseQty = (id) => {
  setCart((prev) =>
    prev.map((item) =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    )
  );
};

const decreaseQty = (id) => {
  setCart((prev) =>
    prev
      .map((item) =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter((item) => item.qty > 0)
  );
};

const clearCart = () => {
  setCart([]);
  if (typeof window !== "undefined") {
    window.localStorage.removeItem("cart");
  }
};

  return (
    <CartContext.Provider
  value={{ cart, addToCart, increaseQty, decreaseQty, clearCart }}
>

      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used inside CartProvider");
  }
  return ctx;
}
