import React from "react";
import "./Home.css";
import "animate.css";
import watch from "../../assets/home-header-watch.svg";
import cat1 from "../../assets/cat-1.svg";
import cat2 from "../../assets/cat-2.svg";
import cat3 from "../../assets/cat-3.png";
import cat4 from "../../assets/cat-4.png";
import cat5 from "../../assets/watch.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination"; // Add if you want pagination

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
    </>
  );
};

export default Home;
