import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import  Cards from './Cards'
const Carousal = () => {
  const [offsetRadius] = useState(4);
  const [showArrows] = useState(true);
  const [goToSlide, setGoToSlide] = useState(null);

  
  const cards = [
    {
      key: 1,
      content: <Cards />,
      onClick: () => setGoToSlide(0),
    },
    {
      key: 2,
      content: <Cards />,
      onClick: () => setGoToSlide(1),
    },
    {
      key: 3,
      content: <Cards />,
      onClick: () => setGoToSlide(2),
    },
  ];

 
  

  return (
    <div style={{ width: "500px", height: "400px", margin: "auto" }}>
      <Carousel
        slides={cards}
        goToSlide={goToSlide}
        offsetRadius={offsetRadius}
        
        animationConfig={config.default}
      />
    </div>
  );
};

export default Carousal;
