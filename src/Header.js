/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <div className="header__search">
        <input className="header__searchInput" type="text" />
      </div>
      <div className="header__nav">
        <div className="header__option">
          <span className="optionLineOne">Hello</span>
          <span className="optionLineTwo">Sign in</span>
        </div>
        <div className="header__option">
          <span className="optionLineOne">Returns</span>
          <span className="optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="optionLineOne">Your</span>
          <span className="optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
