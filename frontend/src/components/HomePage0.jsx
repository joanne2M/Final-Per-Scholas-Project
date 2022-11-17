import React from "react";
import { useState } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import "../pages/HomePage.css";
import Carousel from 'react-bootstrap/Carousel';

function HomePage0({ addToCart }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  }; 
  
  return (
    <>
      <div className="carousel">
      <Carousel variant="light" className="carousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="carouselImage"
            src="https://media.discordapp.net/attachments/1010618210720165888/1042649988905316392/Screenshot_2022-11-16_221239.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
        <img
          className="carouselImage"
          src="https://media.discordapp.net/attachments/1010618210720165888/1042650084887760956/2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="carouselImage"
          src="https://media.discordapp.net/attachments/1010618210720165888/1042650137958289438/3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      </Carousel>
    </div>

      <div className="productContainer">
        <div className="shirtContainer" id = "shirtOne">
          <div className="shirtImage">
            {" "}
            <img src="https://i.etsystatic.com/23277497/r/il/5ac5aa/3072710774/il_794xN.3072710774_dxea.jpg" alt="" className="shirt"></img>
          </div>
          <div className="itemDescrip"> Catching Flights and You can finish the sentence! </div>
          <button type="button" className="add-to-cart-btn" id="1" onClick={(e) => addToCart(e.target.id)}>add to cart</button>
        </div>
        <div className="shirtContainer" id="shirtTwo">
          <div className="shirtImage" >
            <img src="https://i.etsystatic.com/20909886/r/il/82b40c/3190505791/il_794xN.3190505791_16si.jpg" alt="" className="shirt"></img>
          </div>
          <div className="itemDescrip"> Be first class in every airline </div>
          <button type="button" className="add-to-cart-btn" id="2" onClick={(e) => addToCart(e.target.id)}>add to cart</button>
        </div>
        <div className="shirtContainer" id="shirtThree">
          <div className="shirtImage">
            <img src="https://i.etsystatic.com/23277497/r/il/789861/3278762703/il_794xN.3278762703_im8w.jpg" className="shirt" alt=""></img>
          </div>
          <div className="itemDescrip"> This one is for girls. Its the same as the one before it, but different. </div>

          <button type="button" className="add-to-cart-btn" id="3" onClick={(e) => addToCart(e.target.id)}>add to cart</button>
        </div>
      </div>
    </>
  );
}
export default HomePage0;