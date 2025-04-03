
import '../csspage/billing.css';
import React, { useEffect, useState } from "react";
import jsPDF from "jspdf";

const Billing = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products/category/groceries")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const generateInvoice = () => {
    const doc = new jsPDF();
    doc.text("Grocery Store Invoice", 20, 20);

    let yPos = 40;
    cart.forEach((item, index) => {
      doc.text(`${index + 1}. ${item.title} - $${item.price}`, 20, yPos);
      yPos += 10;
    });

    const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
    doc.text(`Total: $${totalPrice.toFixed(2)}`, 20, yPos + 10);

    doc.save("invoice.pdf");
  };

  return (
    <div className="container">
      <h1 className="title">Grocery Billing Page</h1>

      {/* Product List */}
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.thumbnail} alt={product.title} className="product-image" />
            <h2 className="product-title">{product.title}</h2>
            <p className="product-price">${product.price}</p>
            <button className="add-to-cart-btn" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Cart Section */}
      <div className="cart-section">
        <h2>Shopping Cart</h2>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <span>{item.title} - <strong>${item.price}</strong></span>
                  <button className="remove-btn" onClick={() => removeFromCart(index)}>Remove</button>
                </li>
              ))}
            </ul>
            <button className="download-invoice-btn" onClick={generateInvoice}>
              Download Invoice
            </button>
          </>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
    
  );
};





export default Billing
