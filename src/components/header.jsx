import React,{ useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const imageData = [
  {
    alt: 'image1',
    url: 'img/intro4.jpeg'
},
  {
      alt: 'image2',
      url: 'img/intro1.jpg'
  },
  {
      alt: 'image3',
      url: 'img/intro3.jpg'
  },
  {
      alt: 'image4',
      url: 'img/intro2.jpg'
  }
];

const renderSlides = imageData.map((image) => (
  <div key={image.alt} className="container-intro-img">
      <img className="intro-img" src={image.url} alt={image.alt} />
  </div>
  ));

export const Header = (props) => {
const [currentIndex, setCurrentIndex] = useState();

const handleChange = (index) => {
  setCurrentIndex(index);
}

  return (
    <header id="header">      
        <Carousel
          centerSlidePercentage={40}
          showThumbs={false}
          dynamicHeight={true}
          centerMode={false}
          showArrows={false}
          autoPlay={true}
          interval={6000}
          infiniteLoop={true}
          animationHandler='slide'
          selectedItem={imageData[currentIndex]}
          onChange={handleChange}
          className="carousel-container"
          >
          {renderSlides}
        </Carousel>
    </header>
  );
};