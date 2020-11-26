import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG2_en_US_1x._CB418256337_.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="234837"
            title="Gskyer Telescope, 70mm Aperture 400mm AZ Mount Astronomical Refracting Telescope for Kids Beginners - Travel Telescope with Carry Bag, Phone Adapter and Wireless Remote"
            price={99.9}
            image="https://m.media-amazon.com/images/I/81nUym12AOL._AC_UY545_FMwebp_QL65_.jpg"
            rating={3}
          />
          <Product
            id="544732"
            title="Video Camera Camcorder, Digital YouTube Vlogging Camera FHD 1080P 30FPS 24MP 16X Digital Zoom 3 Inch Touch Screen Video Recorder with Remote Control and Tripod, 2 Batteries"
            price={69.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61KGoDcZX7L._AC_UY218_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="356997"
            title="Acer Nitro 5 Gaming Laptop, 9th Gen Intel Core i5-9300H, NVIDIA GeForce GTX 1650, 15.6 Full HD IPS Display, 8GB DDR4, 256GB NVMe SSD, Wi-Fi 6, Backlit Keyboard, Alexa Built-in, AN515-54-5812"
            price={199.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/71s1LRpaprL._AC_UY545_FMwebp_QL65_.jpg"
          />

          <Product
            id="521232"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={4}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?s300x400_retinamobilex2$ "
          />
          <Product
            id="567223"
            title="New Apple iPad Pro (12.9-inch, wi-fi, 128GB) - Silver (4th Generation)"
            price={564.77}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="987654"
            title="Sceptre 30-inch Curved Gaming Monitor 21:9 2560x1080 Ultra Wide Ultra Slim HDMI DisplayPort up to 200Hz Build-in Speakers, Metal Black (C305B-200UN)"
            price={278.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/81Wt3h7-V2L._AC_SX679_.jpg"
          />
          <Product
            id="234566"
            title="EleTab Gaming Monitor Desk Mount - Adjustable Single Monitor Arm Desk Stand Fits for Computer Screen 17 to 32 inches, Hold up to 17.6 lbs"
            price={69.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/71CLVP1Vz9L._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
