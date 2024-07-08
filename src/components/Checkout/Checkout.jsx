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
          <div class="form">
            <div className="form-header">Card details</div>
            <fieldset>
              <legend>Card name</legend>
              <input type="text" placeholder="Enter name on the card" />
            </fieldset>

            <fieldset>
              <legend>Card details</legend>
              <div class="card-details">
                <input
                  type="text"
                  placeholder="Card number"
                  class="card-number"
                />
                <input type="text" placeholder="MM/YY" class="expiry-date" />
                <input type="text" placeholder="CVV" class="cvv" />
              </div>
            </fieldset>

            <fieldset>
              <legend>Email</legend>
              <input type="email" placeholder="Enter your email" />
            </fieldset>

            <fieldset>
              <legend>Billing address</legend>
              <input type="text" placeholder="Enter billing address" />
            </fieldset>

            <button>Pay (₦674,310)</button>
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
