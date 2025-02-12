import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./Products.css";

const ProductItem = ({ item }) => {
  return (
    <>
      <div className="product-item">
        <div className="product-img">
          <img src={item.img_src} alt="watch" />
        </div>
        <div className="product-deets">
          <div>
            <span className="product-name">{item.name}</span>
            <p className="product-descr">{item.description}</p>
          </div>
          <span className="product-price">{item.price}</span>
        </div>
        <div className="product-cta">
          <button className="cta-btn">
            <Link to="/cart">
              <span>Buy now</span>
            </Link>
          </button>
          <button className="cta-btn">
            <Icon icon="ic:round-favorite-border" className="cta-icon" />
            <span>Add to Favourite</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductItem;
