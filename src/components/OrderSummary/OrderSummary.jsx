import React from "react";
import "./OrderSummary.css";

const OrderSummary = () => {
  return (
    <div className="order-summary">
      <header className="order-summary-header">
        <span>Order summary</span>
        <span>4 items</span>
      </header>
      <section className="order-summary-content">
        <div className="order-summary-item">
          <span>Subtotal</span>
          <span>₦887,880</span>
        </div>
        <div className="order-summary-item">
          <span>Discounts (25%)</span>
          <span>-₦221,970</span>
        </div>
        <div className="order-summary-item">
          <span>Delivery Fee</span>
          <span>₦8,400</span>
        </div>
      </section>
      <section className="order-summary-footer">
        <span>Total</span>
        <span>₦674,310</span>
      </section>
      <button className="order-summary-button">Checkout</button>
    </div>
  );
};

export default OrderSummary;
