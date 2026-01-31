import { useState } from "react";

function Checkout() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed successfully!");
    window.location.href = "/";
  };

  return (
    <div className="container mt-5">
      <h2>Checkout</h2>

      <form onSubmit={handleSubmit} className="col-md-6">
        <input
          className="form-control mb-2"
          name="name"
          placeholder="Name"
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="email"
          placeholder="Email"
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="address"
          placeholder="Address"
          onChange={handleChange}
        />
        <input
          className="form-control mb-2"
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
        />

        <button className="btn btn-success mt-3">
          Place Order
        </button>
      </form>
    </div>
  );
}

export default Checkout;
