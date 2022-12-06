import React from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../data/SliderData";
import GeoMap from "../components/GeoMap";
import MapComponent from "../components/MapComponent";
import PlanContainer from "../components/PlanContainer";
import HotelContainer from "../components/HotelContainer";

const MainPage = () => {
  return (
    <div>
      <ImageSlider slides={SliderData} name="slider" />
      <GeoMap />
      <PlanContainer />
      <MapComponent />
      <HotelContainer />
    </div>
  );
};

export default MainPage;
