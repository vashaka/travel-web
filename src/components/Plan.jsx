import React, { useEffect } from "react";

import { RiStarSFill } from "react-icons/ri";

const styles = {
  img: "h-full rounded-lg hover:scale-110",
};

const Plan = ({
  PlanTitle,
  HotelSelectedImage,
  HotelImages,
  priceOnOneDay,
  reviews,
  rating,
}) => {
  const [selectedimg, setSelectedImg] = React.useState(HotelSelectedImage);

  return (
    <div
      className="cursor-pointer	md:hover:scale-105 ease-in duration-300 w-full h-[auto] object-cover"
      style={{
        borderRadius: "25px",
        border: "3px solid rgb(255, 255, 255)",
        boxShadow: "rgb(19 15 235 / 15%) 1px 2px 20px",
      }}
    >
      <p className="">{PlanTitle}</p>
      <p>Locations</p>
      <p className="opacity-30">What you'll see</p>
    </div>
  );
};

export default Plan;
