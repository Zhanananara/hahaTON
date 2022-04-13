import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer" style={{ paddingBottom: "20px" }}>
      <div className="footer-one">Chanel</div>
      <div className="footer-two">
        <div className=" first sp">
          <p>Explore chanel.com</p>
          <ul>
            <li>Haute Couture</li>
            <li>Fashion</li>
          </ul>
        </div>
        <div className="second sp">
          <p>Online services</p>
          <ul>
            <li>Payment Methods</li>
            <li>Shipping Options</li>
          </ul>
        </div>
        <div className="third sp">
          <p>Boutique services</p>
          <ul>
            <li>Store Locator</li>
            <li>Book an Appointment</li>
          </ul>
        </div>
        <div className="fourth sp">
          <p>The house of chanel</p>
          <ul>
            <li>Careers</li>
            <li>Legal</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Footer;
