import React, { useEffect, useState } from "react";
import axios from "axios";
import "../csspage/setprice.css";

const API_URL = "https://dummyjson.com/products/category/groceries";

const Setprice = () => {
  const [products, setProducts] = useState([]);
  const [prices, setPrices] = useState({});

  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => {
        setProducts(response.data.products); // API returns products array
        const initialPrices = {};
        response.data.products.forEach((product) => {
          initialPrices[product.id] = product.price;
        });
        setPrices(initialPrices);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handlePriceChange = (id, newPrice) => {
    setPrices((prevPrices) => ({
      ...prevPrices,
      [id]: newPrice,
    }));
  };

  const savePrices = () => {
    console.log("Updated Prices:", prices);
    alert("Prices updated successfully!");
  };

  return (
    
    <div className="set-price-container">
      <h2>🛒 Set Product Prices</h2>
      <table className="price-table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product</th>
            <th>Current Price (₹)</th>
            <th>Set New Price (₹)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td><img src={product.thumbnail} alt={product.title} className="product-img" /></td>
              <td>{product.title}</td>
              <td>₹{product.price}</td>
              <td>
                <input className="input"
                  type="number"
                  value={prices[product.id]}
                  onChange={(e) => handlePriceChange(product.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="save-btn" onClick={savePrices}>💾 Save Prices</button>
    </div>
  );
};

export default Setprice