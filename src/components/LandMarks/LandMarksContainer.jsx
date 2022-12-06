import React from "react";
import Landmark from "./LandMarks";
import { Landmarks } from "../../data/LandMarks";

const LandMarkContainer = () => {
  return (
    <div className="max-w-[1240px] m-auto py-16 px-4 text-center">
      <h1 className="text-3xl text-[#f51767]">Choose Your Landmarks</h1>
      <p className="text-lg">Tap on your favourite and check it on the map</p>
      <div className="LandMarksContainer grid grid-rows-none md:grid-cols-2 lg:grid-cols-3 py-4 gap-2 md:gap-4">
        {Landmarks.map((item) => (
          <Landmark
            LandMarkTitle={item.name}
            stars={item.stars}
            LandMarkSelectedImage={item.LandMarkSelectedImage}
            LandMarkImages={item.images}
            PriceToGetThere={item.PriceToGetThere}
            reviews={item.reviews}
            rating={item.rating}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default LandMarkContainer;
