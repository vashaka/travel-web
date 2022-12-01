import React from "react";
import { useSelector } from "react-redux";

import GEO_MAP from "../data/GEO_MAP.png";

const GeoMap = () => {
  const ActivePlan = useSelector((state) => state.ActivePlane);

  return (
    <div className="flex justify-center">
      <h1 className="absolute">{ActivePlan}</h1>
      <img src={GEO_MAP} alt="geo-map" width={800} />
    </div>
  );
};

export default GeoMap;
