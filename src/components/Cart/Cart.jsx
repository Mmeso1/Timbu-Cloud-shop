import React from "react";
import { Icon } from "@iconify/react";
import OrderSummary from "../OrderSummary/OrderSummary";
import "./Cart.css";
import watch3 from "../../assets/watch (3).svg";
import watch2 from "../../assets/watch (2).svg";
import watch4 from "../../assets/watch (4).svg";

const Cart = () => {
  const cartItems = [
    {
      img_src: watch3,
      name: "Tempo W3",
      description: "Oraimo | Smart watch",
      price: "₦25,850",
      unit: 1,
      total: "₦25,850",
    },
    {
      img_src: watch2,
      name: "Rubber-band Apple Watch",
      description: "Apple Series 9 | Smart watch",
      price: "₦791,030",
      unit: 1,
      total: "₦791,030",
    },
    {
      img_src: watch4,
      name: "Gold Digital Casio Watch",
      description: "Casio | Digital watch",
      price: "₦35,500",
      unit: 2,
      total: "₦71,000",
    },
  ];
  return (
    <div className="cart-container">
      <div className="breadcrumb">
        <p>
          Home &gt; &nbsp;Products &nbsp; &gt; <b>&nbsp;Cart</b>
        </p>
      </div>

      <div className="cart-body">
        <div className="table">
          <div className="table-head">
            <div>Product Images</div>
            <div>Product Description</div>
            <div>Price</div>
            <div>Unit</div>
            <div>Total</div>
          </div>
          {cartItems.map((item, index) => (
            <div className="table-row" key={index}>
              <div className="tr-img">
                <img src={item.img_src} alt="watch img" />
              </div>
              <div className="table-descr">
                <span>{item.name}</span>
                <span>{item.description}</span>
              </div>
              <div className="price">{item.price}</div>
              <div className="unit">
                <span>
                  <Icon icon="ic:round-minus" className="icon" />
                </span>
                <span>{item.unit}</span>
                <span>
                  <Icon icon="ic:round-add" className="icon" />
                </span>
              </div>
              <div className="total">{item.total}</div>
              <div>
                <Icon icon="ic:round-clear" className="clear-icon" />
              </div>
            </div>
          ))}
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  );
};

export default Cart;
