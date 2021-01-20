import Carousel from "react-elastic-carousel";
import React from "react";
import './Sliders.css'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
];

export default function Sliders() {
  return (
    <>
      <div className="Slider">
        <Carousel breakPoints={breakPoints}>
          <img src = '/WFHPic.JPG' className = "pic"></img>
          <img src = '/YFCFNC.JPG' className = "pic"></img>
          <img src = '/YFGN.png' className = "pic"></img>
          <img src = '/Borderless.png' className = "pic"></img>
        </Carousel>
      </div>
    </>
  );
}

