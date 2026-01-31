import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = products.filter((p) => {
    const matchSearch = p.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchCategory =
      category === "All" || p.category === category;
    return matchSearch && matchCategory;
  });

  return (
    <div className="container mt-4 bg-white p-4 rounded shadow">
      <h2 className="mb-4">Explore Products</h2>

      <div className="row mb-4">
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="col-md-3">
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option>All</option>
            <option>Electronics</option>
            <option>Fashion</option>
          </select>
        </div>
      </div>

      {/* GRID SYSTEM */}
      <div className="row g-4" style={{ maxHeight: "70vh", overflowY: "auto" }}>
        {filtered.map((product) => (
          <div className="col-md-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
