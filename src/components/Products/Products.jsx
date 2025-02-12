import React from "react";
import { Icon } from "@iconify/react";
import "./Products.css";
import ProductItem from "./ProductItem";
import watch from "../../assets/watch.svg";
import watch1 from "../../assets/watch (1).svg";
import watch2 from "../../assets/watch (2).svg";
import watch3 from "../../assets/watch (3).svg";
import watch4 from "../../assets/watch (4).svg";
import watch5 from "../../assets/watch (5).svg";
import watch6 from "../../assets/watch (6).svg";
import watch7 from "../../assets/watch (7).svg";

const Products = () => {
  const selectTagOptions = [
    { name: "brand", options: ["Brand"] },
    { name: "type", options: ["Type"] },
    { name: "maker", options: ["Maker"] },
    { name: "price-min", options: ["Price(min)"] },
    { name: "price-max", options: ["Price(max)"] },
  ];

  const productItemDetails = [
    {
      img_src: watch,
      name: "Mille Milestone 100XP",
      price: "₦1.091M",
      description: "Richard Mille | Analog watch",
    },
    {
      img_src: watch1,
      name: "Authentic Leather Mega One",
      price: "₦899.99K",
      description: "Omega | Analog watch",
    },
    {
      img_src: watch2,
      name: "Rubber-band Apple Watch",
      price: "₦791.03K",
      description: "Apple Series 9 | Smart watch",
    },
    {
      img_src: watch3,
      name: "Tempo W3",
      price: "₦25.85K",
      description: "Oraimo | Smart watch",
    },
    {
      img_src: watch4,
      name: "Gold Digital Casio Watch",
      price: "₦35.50K",
      description: "Casio | Digital watch",
    },
    {
      img_src: watch5,
      name: "Apple Remark Spot",
      price: "₦250.00K",
      description: "Apple Series 4 | Smart watch",
    },
    {
      img_src: watch6,
      name: "Galaxy Watch 6",
      price: "₦295.85K",
      description: "Samsung | Smart watch",
    },
    {
      img_src: watch7,
      name: "Galaxy GPS & Bluetooth",
      price: "₦305.50K",
      description: "Samsung | Smart watch",
    },
    {
      img_src: watch,
      name: "Apple Remark Pro",
      price: "₦359.00K",
      description: "Apple Series 4 | Smart watch",
    },
  ];

  return (
    <div className="product-sect">
      <section>
        <header>Our Best Deals For You!</header>
        {/* <div className="header">
          <div className="select-container">
            {selectTagOptions.map((item, index) => {
              return (
                <select name={item.name} id={item.name} key={index}>
                  <option value="" className="option">
                    {item.options[0]}
                  </option>
                </select>
              );
            })}
          </div>
          <div>
            <div className="cta-container">
              <span>
                <Icon icon="ic:round-clear" className="prod-icon" />
                <p>Clear all</p>
              </span>
              <span>
                <Icon icon="tabler:search" className="prod-icon" />
                <p>Search</p>
              </span>
            </div>
          </div>
        </div> */}
      </section>

      <section className="product-listings">
        {productItemDetails.map((item, index) => {
          return <ProductItem item={item} key={index} />;
        })}
      </section>
    </div>
  );
};

export default Products;
