import React from "react";
import "./Home.css";
import "animate.css";
import watch from "../../assets/home-header-watch.svg";

const Home = () => {
  return (
    <>
      <section className="header">
        <div className="texts">
          <div className="txt">
            <h1 className="main-text">
              Your World of <span>Luxury Watch</span> at an Affordable Price
            </h1>
            <p className="sub-text">
              Lorem ipsum dolor sit amet consectetur. Neque et risus
              pellentesque dui praesent tempus erat a tincidunt. Quam diam
              aliquet morbi cras venenatis.
            </p>
          </div>
          <div className="cta-buttons">
            <button>Shop Now</button>
            <button>See Cart</button>
          </div>
        </div>
        <img
          className="header-img animate__animated animate__fadeIn"
          src={watch}
          alt="header watch image"
        />
      </section>
    </>
  );
};

export default Home;
