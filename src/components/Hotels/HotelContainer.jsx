import React from "react";
import Hotel from "./Hotel";
import { Hotels } from "../../data/Hotels";
import { BatumiHotels } from "../../data/BatumiHotels";
import { useSelector } from "react-redux";

const styles = {
  selectedLandmarkTitle: "flex justify-center",
  span: "text-white bg-[#f51767] px-2 py-1 rounded-sm",
};

const HotelContainer = () => {
  const selectedIdForFilteringHotels = useSelector(
    (state) => state.selectedIdForFilteringHotels
  );
  return (
    <div className="max-w-[1240px] m-auto py-16 px-4 text-center">
      <h1 className="text-3xl text-[#f51767]">Choose Your Hotel</h1>
      <p className="text-lg">
        Tap on your favourite Landmark and filter Hotels
      </p>
      <div
        className="grid grid-rows-none md:grid-cols-2 lg:grid-cols-3 py-4 gap-2 md:gap-4"
        id="hotels"
      >
        {/* Every Hotel */}

        {selectedIdForFilteringHotels.trim().length === 0 &&
          Hotels.map((item) => (
            <Hotel
              title={item.HotelTitle}
              stars={item.stars}
              selectedImage={item.HotelSelectedImage}
              images={item.images}
              price={item.priceOnOneDay}
              reviews={item.reviews}
              rating={item.rating}
              key={item.id}
              id={item.id}
            />
          ))}
        {/* Batumi_hotels */}
        {selectedIdForFilteringHotels.trim().includes("3") &&
          BatumiHotels.map((item) => (
            <Hotel
              title={item.HotelTitle}
              stars={item.stars}
              selectedImage={item.HotelSelectedImage}
              images={item.images}
              price={item.priceOnOneDay}
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

export default HotelContainer;
