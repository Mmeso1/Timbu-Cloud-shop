import React from "react";
import { Icon } from "@iconify/react";
import "./Footer.css";

const Footer = () => {
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
                          <Icon icon={link.icon} className="quicklink-icon" />
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
  );
};
