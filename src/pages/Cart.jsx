import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty } =
    useContext(CartContext);

  if (cart.length === 0) {
    return <h3 className="text-center mt-5">Cart is empty</h3>;
  }

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>

      {cart.map((item) => (
        <div
          key={item.id}
          className="d-flex justify-content-between align-items-center border p-3 mb-2"
        >
          <div>
            <h5>{item.name}</h5>
            <p>₹{item.price}</p>
          </div>

          <div>
            <button
              className="btn btn-sm btn-secondary me-2"
              onClick={() => decreaseQty(item.id)}
            >
              -
            </button>
            {item.qty}
            <button
              className="btn btn-sm btn-secondary ms-2"
              onClick={() => increaseQty(item.id)}
            >
              +
            </button>
          </div>

          <button
            className="btn btn-danger"
            onClick={() => removeFromCart(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <Link to="/checkout" className="btn btn-success mt-3">
        Proceed to Checkout
      </Link>
    </div>
  );
}

export default Cart;
