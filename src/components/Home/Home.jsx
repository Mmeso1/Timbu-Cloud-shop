import React from "react";
import "./Home.css";
import "animate.css";
import watch from "../../assets/home-header-watch.svg";
import cat1 from "../../assets/cat-1.svg";
import cat2 from "../../assets/cat-2.svg";
import cat3 from "../../assets/cat-3.png";
import cat4 from "../../assets/cat-4.png";
import cat5 from "../../assets/watch.svg";
import watch1 from "../../assets/watch.svg";
import watch2 from "../../assets/watch (2).svg";
import watch3 from "../../assets/watch (3).svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import ProductItem from "../Products/ProductItem";

const Home = () => {
  const productItemDetails = [
    {
      img_src: watch1,
      name: "Mille Milestone 100XP",
      price: "₦1.091M",
      description: "Richard Mille | Analog watch",
    },
    {
      img_src: watch2,
      name: "Authentic Leather Mega One",
      price: "₦899.99K",
      description: "Omega | Analog watch",
    },
    {
      img_src: watch3,
      name: "Rubber-band Apple Watch",
      price: "₦791.03K",
      description: "Apple Series 9 | Smart watch",
    },
  ];
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
      <section className="category-carousel">
        <h1>Our Top Categories</h1>
        <Swiper
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
        >
          <SwiperSlide>
            <div className="text">
              <h1>Richard Mille</h1>
              <p>Analog Watch</p>
            </div>
            <img src={cat1} alt="Richard Mille Analog Watch" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="text">
              <h1>Oraimo</h1>
              <p>Smart Watch</p>
            </div>
            <img src={cat2} alt="Oraimo Smart Watch" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="text">
              <h1>Omega</h1>
              <p>Analog Watch</p>
            </div>
            <img src={cat3} alt="Omega Analog Watch" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="text">
              <h1>Samsung Watch</h1>
              <p>Smart Watch</p>
            </div>
            <img src={cat4} alt="Samsung Smart Watch" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="text">
              <h1>Rolex</h1>
              <p>Analog Watch</p>
            </div>
            <img src={cat5} alt="Rolex Analog Watch" />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="best-deals">
        <h1>Best Deals</h1>
        <div className="product-items">
          {productItemDetails.map((item, index) => {
            return (
              <ProductItem
                img_src={item.img_src}
                name={item.name}
                price={item.price}
                description={item.description}
                key={index}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Home;
