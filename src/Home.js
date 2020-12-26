import React from "react";
import "./Home.css";
import Product from "./Product";
import Footer from "./Footer";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Promo/Desktop/Fuji_TallHero_HD_NG_en_US_1x._CB414678881_.jpg"
          alt=""
        />
        <div className="home__row">
          <div className="component">
            <div className="homeUI">
              <div className="UI__heading">
                <AccountCircleIcon className="avatar" />
                <span className="headName">Hi, Ebrahim</span>
              </div>
              <div className="middle_text">
                <span className="mid__text">Recommendations for you</span>
              </div>
              <div className="reco__contentOne">
                <div className="firstRow">
                  <div className="content__one">
                    <img
                      className="content__imgU"
                      src="https://images-na.ssl-images-amazon.com/images/I/91JA5-hAnoL._AC_SX679_.jpg"
                      alt=""
                    />
                    <span className="content__name1">You Orders</span>
                  </div>
                  <div className="content__two">
                    <img
                      className="content__imgU"
                      src="https://images-na.ssl-images-amazon.com/images/I/51xvUyKNLCL._AC_SL1500_.jpg"
                      alt=""
                    />
                    <span className="content__name">Electronics</span>
                  </div>
                </div>
                <div className="reco__contentTwo">
                  <div className="secondRow">
                    <div className="content__one">
                      <img
                        className="content__img"
                        src="https://images-na.ssl-images-amazon.com/images/I/81EtXsYalvL._AC_SL1500_.jpg"
                        alt=""
                      />
                      <span className="content__name">Computers</span>
                    </div>
                    <div className="content__two">
                      <img
                        className="content__imgK"
                        src="https://images-na.ssl-images-amazon.com/images/I/71p5GSQ-BVL._AC_SL1500_.jpg"
                        alt=""
                      />
                      <span className="content__name">Home & Kitchen</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="component">
            <div className="homeUI2">
              <div className="UI__heading">
                <span className="headName">Deals & Promotions</span>
              </div>
              <div className="UI_img">
                <img
                  className="dp__img"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Deals_1x._SY304_CB430401028_.jpg"
                  alt=""
                />
              </div>
              <div className="link">
                <span className="comp__link">Shop now</span>
              </div>
            </div>
          </div>
          <div className="component">
            <div className="homeUI3">
              <div className="UI__heading">
                <span className="headName">Shipping to Nigeria</span>
              </div>
              <div className="UI_img">
                <img
                  className="dp__img"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/November/Fuji_Dash_BXGY_1x._SY304_CB416796032_.jpg"
                  alt=""
                />
              </div>
              <div className="link">
                <span className="comp__link">
                  Use code NG15 on purchases over US $75
                </span>
              </div>
            </div>
          </div>
          <div className="component">
            <div className="homeUI2">
              <div className="UI__heading">
                <span className="headName">Shop top categories</span>
              </div>
              <div className="UI_img">
                <img
                  className="dp__img"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/PrimeDay/Fuji_Dash_PD_Nonprime__1x._SY304_CB403084762_.jpg"
                  alt=""
                />
              </div>
              <div className="link">
                <span className="comp__link">See more</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home__row">
          <div className="component">
            <div className="homeUI3">
              <div className="UI__heading">
                <span className="headName">AmazonBasics</span>
              </div>
              <div className="UI_img">
                <img
                  className="dp__img"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"
                  alt=""
                />
              </div>
              <div className="link">
                <span className="comp__link">See more</span>
              </div>
            </div>
          </div>

          <div className="component">
            <div className="homeUI3">
              <div className="UI__heading">
                <span className="headName">Beauty picks</span>
              </div>
              <div className="UI_img">
                <img
                  className="dp__img"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
                  alt=""
                />
              </div>
              <div className="link">
                <span className="comp__link">Shop now</span>
              </div>
            </div>
          </div>

          <div className="component">
            <div className="homeUI3">
              <div className="UI__heading">
                <span className="headName">Computer & Accessories</span>
              </div>
              <div className="UI_img">
                <img
                  className="dp__img"
                  src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_PC_1x._SY304_CB431800965_.jpg"
                  alt=""
                />
              </div>
              <div className="link">
                <span className="comp__link">Shop now</span>
              </div>
            </div>
          </div>

          <div className="component">
            <div className="homeUI">
              <div className="UI__heading">
                <span className="headName">Shop by Category</span>
              </div>

              <div className="reco__contentOne">
                <div className="firstRow">
                  <div className="content__one">
                    <img
                      className="content__imgU"
                      src="https://images-na.ssl-images-amazon.com/images/I/91fAU6mxFsL._AC_SL1500_.jpg"
                      alt=""
                    />
                    <span className="content__name1">Computer &</span>
                    <span className="content__name1">Accessories</span>
                  </div>
                  <div className="content__two">
                    <img
                      className="content__imgV"
                      src="https://images-na.ssl-images-amazon.com/images/I/71Yt9no5UNL._AC_SL1500_.jpg"
                      alt=""
                    />
                    <span className="content__name">Video Games</span>
                  </div>
                </div>
                <div className="reco__contentTwo">
                  <div className="secondRow">
                    <div className="content__one">
                      <img
                        className="content__imgB"
                        src="https://images-na.ssl-images-amazon.com/images/I/8152rBrraCL._AC_SX569_PIbundle-8,TopRight,0,0_SH20_.jpg"
                        alt=""
                      />
                      <span className="content__name">Baby</span>
                    </div>
                    <div className="content__two">
                      <img
                        className="content__img"
                        src="https://images-na.ssl-images-amazon.com/images/I/71mla1QQhFL._AC_SL1500_.jpg"
                        alt=""
                      />
                      <span className="content__name">Toys & Games</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="home__row">
          <div className="component_row">
            <div className="row__header">
              <span className="headTitle">Amazon Top Sellers</span>
              <span className="headTitle2">Shop now</span>
            </div>
            <div className="row_content">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg"
                alt=""
                className="row_img"
              />

              <img
                src="https://images-na.ssl-images-amazon.com/images/I/716pgZxRYhL._AC_SL1395_.jpg"
                alt=""
                className="row_img"
              />
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/61z5oOk5fzL._AC_SL1350_.jpg"
                alt=""
                className="row_img"
              />
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71nDX36Y9UL._AC_SL1026_.jpg"
                alt=""
                className="row_img"
              />
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/91KQmjDxj-L._SL1500_.jpg"
                alt=""
                className="row_img"
              />
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/61ViijOSR8L._AC_SL1500_.jpg"
                alt=""
                className="row_img"
              />
            </div>
          </div>
        </div>
        <div className="home__row">
          <div className="component_row">
            <div className="row__header">
              <span className="headTitle">Amazon Top Sellers</span>
              <span className="headTitle2">Shop now</span>
            </div>
            <div className="row_content">
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71NTi82uBEL._AC_SL1500_.jpg"
                alt=""
                className="row_img"
              />

              <img
                src="https://images-na.ssl-images-amazon.com/images/I/716pgZxRYhL._AC_SL1395_.jpg"
                alt=""
                className="row_img"
              />
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/61z5oOk5fzL._AC_SL1350_.jpg"
                alt=""
                className="row_img"
              />
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/71nDX36Y9UL._AC_SL1026_.jpg"
                alt=""
                className="row_img"
              />
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/91KQmjDxj-L._SL1500_.jpg"
                alt=""
                className="row_img"
              />
              <img
                src="https://images-na.ssl-images-amazon.com/images/I/61ViijOSR8L._AC_SL1500_.jpg"
                alt=""
                className="row_img"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
