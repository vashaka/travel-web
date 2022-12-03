import React from "react";

import { RiStarSFill } from "react-icons/ri";

const styles = {
  img: "h-full rounded-lg hover:scale-110",
};

const Hotel = ({
  HotelTitle,
  HotelSelectedImage,
  stars,
  HotelImages,
  priceOnOneDay,
  reviews,
  rating,
}) => {
  const [selectedimg, setSelectedImg] = React.useState(HotelSelectedImage);

  const starsOfHotel = Number(stars);
  return (
    <div
      className="cursor-pointer	md:hover:scale-105 ease-in duration-300 w-full h-[375px] object-cover"
      style={{
        borderRadius: "25px",
        border: "3px solid rgb(255, 255, 255)",
        boxShadow: "rgb(19 15 235 / 15%) 1px 2px 20px",
      }}
    >
      <p className="">{HotelTitle}</p>
      <div className="flex justify-center">
        {starsOfHotel === 2 && (
          <>
            <RiStarSFill />
            <RiStarSFill />
          </>
        )}
        {starsOfHotel === 3 && (
          <>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </>
        )}
        {starsOfHotel === 4 && (
          <>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </>
        )}
        {starsOfHotel === 5 && (
          <>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
          </>
        )}
      </div>
      <div className="flex justify-center h-[200px]">
        <img
          src={selectedimg}
          alt="Coolest Hotel"
          width={350}
          className="rounded-xl mt-2"
        />
      </div>
      <div className="grid grid-flow-col gap-0 mt-1">
        {HotelImages?.map((HotelImage) => (
          <img
            key={HotelImage.image}
            src={HotelImage.image}
            width={70}
            alt=""
            className={styles.img}
            onMouseEnter={() => setSelectedImg(HotelImage.image)}
          />
        ))}
      </div>
      <div className="flex justify-start mt-[3px] mx-4 md:mx-1">
        <p className="text-sm text-gray-400">1 night, 2 adults</p>
      </div>
      <div className="flex justify-start -mt-1 mx-4 md:mx-1">
        <p className="font-medium">USD {priceOnOneDay}</p>
      </div>
      <div className="flex justify-end -mt-[2.7rem] mx-4 md:mx-1">
        <div className="">
          <p>Fabulous</p>
          <p className="text-[14px] mr-2 text-gray-400 -mt-1">
            {reviews} reviews
          </p>
        </div>

        <div
          className="bg-[#003580] w-[32px] h-[32px] mt-[4px] flex justify-center items-center"
          style={{ borderRadius: "5px 5px 10px 0px" }}
        >
          <p className="text-[#ededed] font-medium">{rating}</p>
        </div>
      </div>
      <button className="">Add to Cart</button>
    </div>
  );
};

export default Hotel;
