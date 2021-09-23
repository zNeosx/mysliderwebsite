import React from "react";
import { useState } from "react";
import DataSlider from "./DataSlider";
import BtnSlider from "./BtnSlider";

const Slider = () => { 
    
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== DataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(DataSlider.length);
    }
  };

  const moveDot = index => {
    setSlideIndex(index)
    }

  return (
      <div className="slide-page">
          {DataSlider.map((slide, index) => {
                return (
                <div
                    key={slide.id}
                    className={slideIndex === index + 1 ? "slide active" : "slide"}
                >
                    <img src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`} />
                </div>
                );
            })}

        <div className="slide-container">   
            {DataSlider.map((slide, index) => {
                return (
                <div
                    key={slide.id}
                    className={slideIndex === index + 1 ? "slide active" : "slide"}
                >
                    <img src={process.env.PUBLIC_URL + `/images/img${index + 1}.jpg`} />
                </div>
                );
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />

            <div className="container-dots">
                {Array.from({length: 5}).map((item, index) => (
                    <div 
                    onClick={() => moveDot(index + 1)}
                    className={slideIndex === index + 1 ? "dot active" : "dot"}
                    ></div>
                ))}
            </div>
        </div>
        
      </div>
  );
};

export default Slider;
