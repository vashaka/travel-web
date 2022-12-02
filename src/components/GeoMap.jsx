import React from "react";
import { useSelector } from "react-redux";

import GEO_MAP from "../data/GEO_MAP.png";

const GeoMap = () => {
  const ActivePlan = useSelector((state) => state.ActivePlan);

  return (
    <div className="flex justify-center">
      {/* Ignore This */}
      <h1 className="absolute bottom-24 opacity-0" name="Map">
        textForSmoothScroll
      </h1>
      {/* ----------- */}
      <h1 className="absolute text-[#f51767]" name="Map">
        {ActivePlan}
      </h1>
      <img src={GEO_MAP} alt="geo-map" width={800} />
    </div>
  );
};

export default GeoMap;
