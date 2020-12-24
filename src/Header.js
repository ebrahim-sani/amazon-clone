import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import MenuIcon from "@material-ui/icons/Menu";

import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }] = useStateValue();
  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };
  return (
    <div className="header">
      <div className="header__one">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt=""
          />
        </Link>

        <div className="header__add">
          <div className="addLocation__icon">
            <LocationOnIcon className="icon" />
          </div>
          <div className="addText">
            <span className="addText__one">Deliverd to Ebrahim</span>
            <span className="addText__two">Biu 603108</span>
          </div>
        </div>

        <div className="header__search">
          <div className="searchField__left">
            <span className="searchText">
              All <KeyboardArrowDownIcon className="arrow" />
            </span>
          </div>
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="headerFlag">
          <img className="flag" src="usa.png" alt="" />
          <KeyboardArrowDownIcon className="flagArrow" />
        </div>

        <div className="header__nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>
          <Link to="/orders">
            <div className="header__option">
              <span className="optionLineOne">Returns</span>
              <span className="optionLineTwo">& Orders</span>
            </div>
          </Link>
          <div className="header__option">
            <span className="optionLineOne">Your</span>
            <span className="optionLineTwo">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingCartIcon />
              <span className="optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>

      <div className="header__two">
        <div className="nav__left">
          <MenuIcon />
          <span className="icon__lebel">All</span>
        </div>
        <div></div>
        <div className="headerTwo__container">
          <div className="nav__link">
            <span className="header_text">Today's Deals</span>
          </div>

          <div className="nav__link">
            <span className="header_text">users Amazon.com</span>
          </div>

          <div className="nav__link">
            <span className="header_text">Customer Services</span>
          </div>

          <div className="nav__link">
            <span className="header_text">Browsing History</span>
          </div>

          <div className="nav__link">
            <span className="header_text">Buy Again</span>
          </div>

          <div className="nav__link">
            <span className="header_text">Gift Cards</span>
          </div>
        </div>
        <div className="nav_right">
          <span className="navLeft_a">Amazon's response to COVID-19</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
