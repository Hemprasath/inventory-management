import React, { useEffect, useState } from "react";
import axios from "axios";
import "../csspage/manageinventory.css";

const API_URL = "https://dummyjson.com/products/category/groceries";

const Manageinventory = () => {
  const [products, setProducts] = useState([]);
  const [inventory, setInventory] = useState({});

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setProducts(response.data.products);
        const initialInventory = {};
        response.data.products.forEach((product) => {
          initialInventory[product.id] = product.stock;
        });
        setInventory(initialInventory);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleStockChange = (id, newStock) => {
    setInventory((prevInventory) => ({
      ...prevInventory,
      [id]: newStock,
    }));
  };

  const saveInventory = () => {
    console.log("Updated Inventory:", inventory);
    alert("Inventory updated successfully!");
  };

  return (
    <div className="inventory-container">
      <h2>📦 Manage Inventory</h2>
      <table className="inventory-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Current Stock</th>
            <th>Update Stock</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img src={product.thumbnail} alt={product.title} className="product-img" /></td>
              <td>{product.title}</td>
              <td>{product.stock}</td>
              <td>
                <input className="input"
                  type="number"
                  value={inventory[product.id]}
                  onChange={(e) => handleStockChange(product.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="save-btn" onClick={saveInventory}>💾 Save Inventory</button>
    </div>
  );
};


export default Manageinventory
