/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Landmark from "./LandMarks";
import { LandmarksArray } from "../../data/LandMarks";
const LandMarkContainer = () => {
  return (
    <div className="max-w-[1240px] m-auto py-16 px-4 text-center">
      <div className="flex justify-center">
        <h1 className="text-white bg-[#f51767] px-2 py-1 rounded-sm">
          2 step -
        </h1>
        <h1 className="text-white text-xs">h</h1>
        <h1 className="text-xl text-[#f51767] mt-1">Choose Your Landmarks</h1>
      </div>

      <p className="text-md">
        // Tap on your favourite and check it on the map
      </p>
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
            idForSelectedHotels={item.idForSelectedHotels}
          />
        ))}
      </div>
    </div>
  );
};

export default LandMarkContainer;
