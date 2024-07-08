import React from "react";
import "./Checkout.css";
import OrderSummary from "../OrderSummary/OrderSummary";

const Checkout = () => {
  return (
    <div className="checkout-container">
      <div className="breadcrumbs">
        <p>
          Home &gt; &nbsp;Products &nbsp; &gt; &nbsp;Cart &gt;{" "}
          <b>&nbsp;Checkout</b>
        </p>
      </div>
      <div className="checkout-body">
        <div className="content">
          <div className="payment">
            <span>Choose payment method</span>
            <label className="custom-radio">
              <input
                type="radio"
                name="payment_method"
                id="debit_card"
                value="Debit card"
              />
              <span className="radio-mark"></span>
              Debit card
            </label>
          </div>
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
