import { Routes, Route, Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import "./App.css";
import logo from "../src/assets/logo.svg";
import Products from "./components/Products/Products";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

function App() {
  const quicklinks = [
    {
      link: "HOME",
    },
    {
      link: "QUICK NAVIGATIONS",
    },
    {
      link: "OUR PRODUCTS",
    },
    {
      link: "CONTACT US",
    },
    {
      link: "ABOUT US",
    },
    {
      link: "LOCATION",
    },
  ];

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <div className="App">
        <nav className="App-nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className={`nav-links ${menuOpen ? "active" : ""}`}>
            <ul>
              <li>
                <Link
                  className="nav-link-item"
                  to="/"
                  onClick={handleLinkClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link-item"
                  to="/products"
                  onClick={handleLinkClick}
                >
                  Products
                </Link>
              </li>
              <li>
                <a className="nav-link-item" href="#" onClick={handleLinkClick}>
                  About Us
                </a>
              </li>
              <li>
                <a className="nav-link-item" href="#" onClick={handleLinkClick}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-cta">
            <Icon icon="majesticons:search-line" className="cta-search" />
            <Link to="/cart" className="cart-cta">
              <Icon icon="mdi:cart-outline" />
            </Link>
            <div>
              <span>
                <Icon icon="iconamoon:profile" />
                <p>Sign Up</p>
              </span>
            </div>
          </div>
          <div className="hamburger">
            <Link to="/cart" className="cart-cta">
              <Icon icon="mdi:cart-outline" />
            </Link>
            <Icon
              icon="ic:round-menu"
              className="menu-cta"
              onClick={toggleMenu}
            />
          </div>
        </nav>
        <section className="App-body">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </section>
        <footer className="App-footer">
          <div className="footer-content">
            <div className="footer-cta">
              <img src={logo} alt="logo" />
            </div>
            <div className="quick-link-container">
              <div className="quick-link-sect">
                <ul>
                  {quicklinks.map((item, index) => (
                    <Link key={index}>
                      <li key={index}>{item.link}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <section className="footer-contacts">
            <div className="footer-icons">
              <Icon icon="hugeicons:new-twitter" className="icon" />
              <Icon icon="basil:facebook-outline" className="icon" />
              <Icon icon="uil:instagram" className="icon" />
            </div>
            <div className="footer-shoutout">Please Follow Us!</div>
          </section>
        </footer>
      </div>
    </>
  );
}

export default App;
