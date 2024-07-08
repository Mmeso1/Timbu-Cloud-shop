import { Icon } from "@iconify/react";
import "./Products.css";
import watch from "../../assets/watch.svg";
import watch1 from "../../assets/watch (1).svg";
import watch2 from "../../assets/watch (2).svg";
import watch3 from "../../assets/watch (3).svg";
import watch4 from "../../assets/watch (4).svg";
import watch5 from "../../assets/watch (5).svg";

const ProductItem = () => {
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
  ];

  return (
    <>
      {productItemDetails.map((item, index) => {
        return (
          <div className="product-item" key={index}>
            <div className="product-img">
              <img src={item.img_src} alt="watch" />
            </div>
            <div className="product-deets">
              <div>
                <span className="product-name">{item.name}</span>
                <span className="product-price">{item.price}</span>
              </div>
              <p className="product-descr">{item.description}</p>
            </div>
            <div className="product-cta">
              <button className="cta-btn">
                <span>Buy now</span>
              </button>
              <button className="cta-btn">
                <Icon icon="ic:round-favorite-border" className="cta-icon" />
                <span>Add to Favourite</span>
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductItem;
