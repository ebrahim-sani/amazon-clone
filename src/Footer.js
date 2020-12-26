import React from "react";
import "./Footer.css";
import LanguageIcon from "@material-ui/icons/Language";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__component">
        <div className="content">
          <span className="heading">Get to know Us</span>
          <span className="links">Careers</span>
          <span className="links">Blog</span>
          <span className="links">About Amazon</span>
          <span className="links">Investor Relations</span>
          <span className="links">Amazon DEvices</span>
          <span className="links">Amazon Tours</span>
        </div>
        <div className="content">
          <span className="heading">Make Money with Us</span>
          <span className="links">Sell products on Amazon</span>
          <span className="links">Sell apps on Amazon</span>
          <span className="links">Become an Affiliate</span>
          <span className="links">Advertise Your Products</span>
          <span className="links">Self-publish with Us</span>
          <span className="links">Host an Amazon Hub</span>
          <span className="links">See More Make Money with Us</span>
        </div>
        <div className="content">
          <span className="heading">Amazon Payment Products</span>
          <span className="links">Amazon Business Card</span>
          <span className="links">Shop with Points</span>
          <span className="links">Reload Your Balance</span>
          <span className="links">Amazon Currency Converter</span>
        </div>
        <div className="content">
          <span className="heading">Let Us Help You</span>
          <span className="links">Amazon and COVID-19</span>
          <span className="links">Your Account</span>
          <span className="links">Your Orders</span>
          <span className="links">Shipping Rates & Policies</span>
          <span className="links">Returns & Replacements</span>
          <span className="links">Manage Your Content and Devices</span>
          <span className="links">Amazon Assistant</span>
          <span className="links">Help</span>
        </div>
      </div>
      <div className="footer__component2">
        <div className="footer__logo">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon logo"
            className="footerLogo"
          />
        </div>

        <div className="footer__button">
          <button className="button">
            <LanguageIcon />
            English
          </button>
        </div>
        <div className="footer__button">
          <button className="button">$USD - U.S. Dollar</button>
        </div>
        <div className="footer__button">
          <button className="button">
            <img src="usa.png" alt="" className="usaFlag__img" />
            United State
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
