import React from "react";
import Landmark from "./LandMarks";
import { LandmarksArray } from "../../data/LandMarks";
const LandMarkContainer = () => {
  return (
    <div className="max-w-[1240px] m-auto py-16 px-4 text-center">
      <h1 className="text-3xl text-[#f51767]">Choose Your Landmarks</h1>
      <p className="text-lg">Tap on your favourite and check it on the map</p>
      <div className="LandMarksContainer grid grid-rows-none md:grid-cols-2 lg:grid-cols-3 py-4 gap-2 md:gap-4">
        {LandmarksArray.map((item, i) => (
          <Landmark
            title={item.name}
            stars={item.stars}
            selectedImage={item.LandMarkSelectedImage}
            images={item.images}
            price={item.PriceToGetThere}
            reviews={item.reviews}
            rating={item.rating}
            key={item.id}
            id={item.id}
          />
        ))}
      </div>
    </div>
  );
};

export default LandMarkContainer;
