import { Icon } from "@iconify/react";
import "./App.css";
import logo from "../src/assets/logo.svg";
import Products from "./components/Products/Products";

function App() {
  const quicklinks = [
    {
      header: "Navigations",
      links: ["Home", "Product", "About Us", "Contact Us"],
    },
    {
      header: "Categories",
      links: ["Analog", "Digital", "Smart"],
    },
    {
      header: "Brands",
      links: ["Richard Mille", "Rolex", "Casio", "Omega", "Smartwatches"],
    },
    {
      header: "Quicklinks",
      links: ["Cart", "History", "Track Order", "Discounts", "FAQ"],
    },
    {
      header: "Contacts",
      links: [
        { text: "Twitter", icon: "hugeicons:new-twitter" },
        { text: "Facebook", icon: "basil:facebook-outline" },
        { text: "Instagram", icon: "uil:instagram" },
        { text: "23a/b Kings road, Ikeja, Lagos", icon: "ph:address-book" },
      ],
    },
  ];

  return (
    <>
      <div className="App">
        <nav className="App-nav">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="nav-links">
            <ul>
              <li>
                <a className="nav-link-item" href="#">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link-item" href="#">
                  Products
                </a>
              </li>
              <li>
                <a className="nav-link-item" href="#">
                  About Us
                </a>
              </li>
              <li>
                <a className="nav-link-item" href="#">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="nav-cta">
            <Icon icon="majesticons:search-line" />
            <Icon icon="mdi:cart-outline" />
            <div>
              <span>
                <Icon icon="iconamoon:profile" />
                <p>Sign Up</p>
              </span>
            </div>
          </div>
        </nav>
        <section className="App-body">
          <Products />
        </section>
        <footer className="App-footer">
          <div className="footer-content">
            <div className="footer-cta">
              <img src={logo} alt="logo" />
              <p>
                Enhance your style with our premium <br />
                wristwatches
              </p>
              <p
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                <Icon icon="solar:copyright-outline" />
                <span>{new Date().getFullYear()}</span>
              </p>
            </div>
            <div className="quick-link-container">
              {quicklinks.map((item, index) => {
                return (
                  <div className="quick-link-sect" key={index}>
                    <header>{item.header}</header>
                    <ul>
                      {item.links.map((link, idx) => (
                        <li key={idx}>
                          <a href="#" className="quicklink-item">
                            {link.icon && (
                              <Icon
                                icon={link.icon}
                                className="quicklink-icon"
                              />
                            )}
                            {link.text || link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
