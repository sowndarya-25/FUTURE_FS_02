import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        MiniShop
      </Link>
      <div>
        <Link className="nav-link d-inline text-white me-3" to="/">
          Home
        </Link>
        <Link className="nav-link d-inline text-white" to="/cart">
          Cart ({cart.length})
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
