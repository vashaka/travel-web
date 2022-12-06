import React from "react";
import Plan from "./Plan";

const PlanContainer = () => {
  return (
    <div className="max-w-[1240px] m-auto py-16 px-4 text-center z-10">
      <h1 className="text-3xl text-[#f51767]">Choose Your Plan</h1>
      <p className="text-lg">
        Tap on your favourite and check Landmarks on the map
      </p>
      <div className="grid grid-rows-none md:grid-cols-2 lg:grid-cols-3 py-4 gap-2 md:gap-4">
        <Plan PlanTitle="Standard" amountOfLandmarks="3" />

        <Plan PlanTitle="Premium" amountOfLandmarks="5" />

        <div className="w-full col-span-2 md:col-span-2 lg:col-span-1 row-span-1 relative">
          <Plan PlanTitle="VIP" amountOfLandmarks="7" />
        </div>
      </div>
    </div>
  );
};

export default PlanContainer;
