import React from "react";
import { Icon } from "@iconify/react";
import "./Products.css";

const Products = () => {
  const selectTagOptions = [
    { name: "brand", options: ["Brand"] },
    { name: "type", options: ["Type"] },
    { name: "maker", options: ["Maker"] },
    { name: "price-min", options: ["Price(min)"] },
    { name: "price-max", options: ["Price(max)"] },
  ];
  return (
    <div className="product-sect">
      <section>
        <header>Our Best Deals For You!</header>
        <div className="header">
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
                <p>Sign Up</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
