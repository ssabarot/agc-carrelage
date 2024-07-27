import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles
import { Image } from "./image";

export const ResponsiveCarousel = ({ data }) => {
  const isSmallScreen = window.innerWidth <= 450;

  return (
    <div className="responsive-carousel">
      {isSmallScreen ? (
        <Carousel 
        showThumbs={false} 
        showStatus={false}>
          {data.map((d, i) => (
            <div key={`${d.title}-${i}`}>
              <Image
                title={d.title}
                largeImage={d.largeImage}
                smallImage={d.smallImage}
              />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="portfolio-items">
          {data.map((d, i) => (
            <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
              <Image
                title={d.title}
                largeImage={d.largeImage}
                smallImage={d.smallImage}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
