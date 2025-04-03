import React, { useState } from "react";
import "../csspage/addproducts.css";

const Addproducts = () => {
  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Product Added:", product);
    alert("Product added successfully!");
    setProduct({ name: "", category: "", price: "", stock: "" });
  };

  return (
    <div className="login-container">
    <div className="add-product-container">
      <h2>➕📦 Add New Product</h2>
      <form onSubmit={handleSubmit} className="product-form">
        <label>📌 Product Name:</label>
        <input className="inputs"
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <label>🏷️ Category:</label>
        <input className="inputs"
          type="text"
          name="category"
          value={product.category}
          onChange={handleChange}
          required
        />

        <label>💰 Price (₹):</label>
        <input className="inputs"
          type="number"
          name="price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <label>📦 Stock Quantity:</label>
        <input className="inputs"
          type="number"
          name="stock"
          value={product.stock}
          onChange={handleChange}
          required
        />

        <button type="submit" className="add-btn">➕ Add Product</button>
      </form>
    </div>
    </div>
  );
};


export default Addproducts
