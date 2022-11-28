import React, { useState } from "react";
import { SliderData } from "../data/SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const [intervalTimer, setIntervalTimer] = useState(5000);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const interval = setInterval(() => {
    nextSlide();
  }, intervalTimer);

  setInterval(() => {
    clearInterval(interval);
  }, intervalTimer);

  // After 5 second sliders are moving in 6s

  setTimeout(() => {
    setIntervalTimer(6000);
  }, SliderData.length * 5000);

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider">
      {/* <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} /> */}
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                className="md:h-[600px] md:w-[1000px] w-[100px] h-auto rounded-[10px]"
                alt="Georgia"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
