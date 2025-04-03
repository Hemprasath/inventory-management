import React, { useState } from "react";
import "../csspage/categorizeproduct.css"

const Categorizeproducts = () => {
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([
    "Fruits & Vegetables",
    "Dairy Products",
    "Snacks & Beverages",
    "Bakery Items",
  ]);

  const handleAddCategory = () => {
    if (category.trim() !== "" && !categories.includes(category)) {
      setCategories([...categories, category]);
      setCategory("");
    }
  };

  const handleRemoveCategory = (index) => {
    const updatedCategories = categories.filter((_, i) => i !== index);
    setCategories(updatedCategories);
  };

  return (
    <div className="login-container">
    <div className="category-container">
      <h2>📂 Categorize Products</h2>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter new category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button onClick={handleAddCategory} className="add-btn">➕ Add</button>
      </div>

      <ul className="category-list">
        {categories.map((cat, index) => (
          <li key={index}>
            {cat} 
            <button className="remove-btn" onClick={() => handleRemoveCategory(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};


export default Categorizeproducts
