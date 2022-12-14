import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "./HomePage.css"

function HomePage({addToCart}) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleClick = (e) => {
    console.log(`e.target.id = ${e.target.id}`)
    addToCart(e.target.id)
  }

  return (
    <div className="carousel-wrapper">
      <Carousel variant="dark" className="carousel" activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item className="carousel-item">
          <img
            className="w-40"
            src="https://www.chisholm-poster.com/large/CL78715.jpg"
            alt="First slide"
          />
          <button type="button" className="add-to-cart-btn" id="1" onClick={(e) => addToCart(e.target.id)}>add to cart</button>
          <Carousel.Caption className="carousel-caption">
            <h3>First slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="w-50"
            src="https://previews.123rf.com/images/ylivdesign/ylivdesign1710/ylivdesign171001267/87292193-fashion-bags-banner-horizontal-concept.jpg"
            alt="Second slide"
          />
          <button type="button" className="add-to-cart-btn" id="2" onClick={(e) => addToCart(e.target.id)}>add to cart</button>
          <Carousel.Caption className="carousel-caption">
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-item">
          <img
            className="w-50"
            src="https://i.pinimg.com/originals/96/e8/de/96e8de8efdeb9f8567c99a7d9803a2f5.gif"
            alt="Third slide"
          />
          <button className="add-to-cart-btn" type="button" id="3" onClick={(e) => addToCart(e.target.id)}>add to cart</button>
          <Carousel.Caption className="carousel-caption">
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HomePage