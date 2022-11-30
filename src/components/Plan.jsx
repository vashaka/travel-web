import React from "react";

const Plan = ({ PlanTitle }) => {
  return (
    <div
      className="md:hover:scale-105 ease-in duration-300 w-full h-[auto] object-cover"
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
