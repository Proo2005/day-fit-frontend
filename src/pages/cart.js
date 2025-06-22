import React, { useState } from "react";
import "../style/cart.css";
import supplimenetImg from '../assets/suppliments/suppliment.webp';


// Example data for the cart page
export default function CartPage() {
  const [cartItems, setCartItems] = useState([ // Sample data
    { id: 1, name: "Supplement 1", price: 499, quantity: 1 ,image:supplimenetImg},
    { id: 2, name: "Supplement 2", price: 599, quantity: 2 ,image:supplimenetImg}
  ]);

  const updateQuantity = (id, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + amount) } : item
      )
    );
  };

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <p>{item.name}</p>
            <div className="quantity-controls">
              <button onClick={() => updateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            </div>
            <p>₹{item.price * item.quantity}</p>
          </div>
        ))}
      </div>
      <h3>Total: ₹{total}</h3>
      <button className="proceed-btn">Proceed to Buy</button>
    </div>
  );
}