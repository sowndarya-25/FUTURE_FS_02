import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100 d-flex flex-column">
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "200px", objectFit: "contain" }}
      />

      <div className="card-body d-flex flex-column text-center">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">₹{product.price}</p>

        {/* THIS LINE IS THE MAGIC */}
        <div className="mt-auto">
          <button
            className="btn btn-primary w-100"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
