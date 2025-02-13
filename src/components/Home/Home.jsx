import React from "react";
import "./Home.css";
import "animate.css";
import watch from "../../assets/home-header-watch.svg";
import cat1 from "../../assets/cat-1.svg";
import cat2 from "../../assets/cat-2.svg";
import cat3 from "../../assets/cat-3.png";
import cat4 from "../../assets/cat-4.png";
import watch1 from "../../assets/watch.svg";
import watch2 from "../../assets/watch (1).svg";
import watch3 from "../../assets/watch (2).svg";
import watch4 from "../../assets/watch (3).svg";
import watch5 from "../../assets/watch (4).svg";
import watch6 from "../../assets/watch (5).svg";
import ghsock1 from "../../assets/gshock1.png";
import ghsock2 from "../../assets/gshock2.png";
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
    {
      img_src: watch4,
      name: "Tempo W3",
      price: "₦25.85K",
      description: "Oraimo | Smart watch",
    },
    {
      img_src: watch5,
      name: "Gold Digital Casio Watch",
      price: "₦35.50K",
      description: "Casio | Digital watch",
    },
    {
      img_src: watch6,
      name: "Apple Remark Spot",
      price: "₦250.00K",
      description: "Apple Series 4 | Smart watch",
    },
  ];
  const swiperContent = [
    {
      heading: "Oraimo",
      subHeading: "Smart Watch",
      img: cat2,
    },
    {
      heading: "Omega",
      subHeading: "Analog Watch",
      img: cat3,
    },
    {
      heading: "Samsung",
      subHeading: "Smart Watch",
      img: cat4,
    },
    {
      heading: "Rolex",
      subHeading: "Analog Watch",
      img: cat3,
    },
    {
      heading: "Richard Mille",
      subHeading: "Analog Watch",
      img: cat1,
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
        <h1 className="header-text">Our Top Categories</h1>
        <Swiper
          slidesPerView={4}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
        >
          {swiperContent.map((content, index) => (
            <SwiperSlide key={index}>
              <div className="text">
                <h1>{content.heading}</h1>
                <p>{content.subHeading}</p>
              </div>
              <div className="image-wrapper">
                <img src={content.img} alt={content.heading} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <section className="best-deals">
        <h1 className="header-text">Our Best Deals For You!</h1>
        <div className="product-listings">
          {productItemDetails.slice(0, 3).map((item, index) => {
            return <ProductItem key={index} item={item} />;
          })}
        </div>
      </section>
      <section className="top-picks">
        <h1 className="header-text">Our Top Pick</h1>
        <div className="product-listings">
          {productItemDetails.slice(3, 6).map((item, index) => {
            return <ProductItem key={index} item={item} />;
          })}
        </div>
      </section>
      <section className="reach-out">
        <h1 className="header-text">Reach Out to Us</h1>
        <form action="" method="post">
          <div className="form-names">
            <div className="form-gr</section>oup">
              <label htmlFor="firstname">First Name</label>
              <input
                type="text"
                name="firstname"
                id="firstname"
                placeholder="Enter your first name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastname">Last Name</label>
              <input
                type="text"
                name="lastname"
                id="lastname"
                placeholder="Enter your last name"
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-group message">
            <label htmlFor="message">Your Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              placeholder="Enter your message"
            ></textarea>
          </div>
          <button type="submit">Send Message</button>
        </form>
      </section>

      <section className="shop-now">
        <img src={ghsock1} alt="gshock watch" />
        <div className="center-piece">
          <div>
            <h1>Buy Two or More Watches, Get an Exclusive Discount!</h1>
            <p>
              Enhance your style with our premium wristwatches. Purchase two or
              more and enjoy unbeatable savings on your favorite timepieces up
              to 20% discount.
            </p>
          </div>
          <button>Shop Now</button>
        </div>
        <img src={ghsock2} alt="gshock watch" />
      </section>
    </>
  );
};

export default Home;
