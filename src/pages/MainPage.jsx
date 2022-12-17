import React from "react";
import ImageSlider from "../components/ImageSlider";
import { SliderData } from "../data/SliderData";
import GeoMap from "../components/GeoMap";
import MapComponent from "../components/MapComponent";
import PlanContainer from "../components/Plans/PlanContainer";
import HotelContainer from "../components/Hotels/HotelContainer";
import LandMarkContainer from "../components/LandMarks/LandMarksContainer";
import Cart from "../components/Cart";

const MainPage = () => {
  return (
    <div>
      <ImageSlider slides={SliderData} name="slider" />
      <GeoMap />
      <PlanContainer />
      <MapComponent />
      <LandMarkContainer />
      <HotelContainer />

      <div className="flex justify-center">
        <Cart />
      </div>
    </div>
  );
};

export default MainPage;
