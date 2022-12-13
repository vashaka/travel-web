import React from "react";

import { RiStarSFill } from "react-icons/ri";

import { useDispatch, useSelector } from "react-redux";
import { AppActions } from "../../redux";

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
  checkForMediumScreen,
}) => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [selectedimg, setSelectedImg] = React.useState(HotelSelectedImage);
  const [isAddedInCart, setIsAddedInCart] = React.useState(true);
  const starsOfHotel = Number(stars);

  const addToCartHandler = () => {
    setIsAddedInCart(!isAddedInCart);
    dispatch(
      AppActions.addToCart({
        HotelTitle,
        HotelSelectedImage,
        stars,
        HotelImages,
        priceOnOneDay,
        reviews,
        rating,
        checkForMediumScreen,
      })
    );
  };
  const removeFromCartHandler = () => {
    setIsAddedInCart(!isAddedInCart);
    dispatch(
      AppActions.removeItem({
        HotelTitle,
        HotelSelectedImage,
        stars,
        HotelImages,
        priceOnOneDay,
        reviews,
        rating,
        checkForMediumScreen,
      })
    );
  };
  return (
    <div className="w-full col-span-2 md:col-span-1 row-span-1 xl:col-span-1 relative">
      <div
        className="cursor-pointer	md:hover:scale-105 ease-in duration-300 w-full h-[375px] object-cover"
        style={{
          borderRadius: "25px",
          border: "3px solid rgb(255, 255, 255)",
          boxShadow: "rgb(19 15 235 / 15%) 1px 2px 20px",
        }}
        // id="hotels"
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
        {/* Making responsive 3rd card */}

        {checkForMediumScreen && (
          <div className="grid grid-flow-col gap-0 mt-1 md:px-40 lg:px-0">
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
        )}
        {!checkForMediumScreen && (
          <div className="grid grid-flow-col gap-0 mt-1">
            {HotelImages?.map((HotelImage) => (
              <img
                key={HotelImage}
                src={HotelImage}
                width={70}
                alt=""
                className={styles.img}
                onMouseEnter={() => setSelectedImg(HotelImage)}
              />
            ))}
          </div>
        )}
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
        <div className="flex justify-center">
          {!isAddedInCart ? (
            <button
              onClick={removeFromCartHandler}
              className="landmark-cart-btn-added hover:cursor-pointer"
            >
              <p>added</p>
            </button>
          ) : (
            <button
              onClick={addToCartHandler}
              className="landmark-cart-btn hover:bg-[#f51767] hover:text-white"
            >
              <p>add to cart</p>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hotel;
