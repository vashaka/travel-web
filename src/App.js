import React from "react";
import HotelPlans from "./components/HotelPans";
import ImageSlider from "./components/ImageSlider";
import Navbar from "./components/Navbar";
import { SliderData } from "./data/SliderData";

const App = () => {
  return (
    <div>
      <Navbar />
      <ImageSlider slides={SliderData} />
      <HotelPlans />
    </div>
  );
};

export default App;
