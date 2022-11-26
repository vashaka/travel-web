import React from "react";

import { RiStarSFill } from "react-icons/ri";

const styles = {
  img: "h-full rounded-lg hover:scale-110",
};

const HotelPlans = () => {
  const [selectedimg, setSelectedImg] = React.useState(
    "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/391436436.jpg?k=5cc7b048a73c5a270d2ad144ccf7b22d9bbb7d82ee12360a6761beffdac0d27f&o=&hp=1"
  );

  return (
    <div className="max-w-[1240px] m-auto py-16 px-4 text-center">
      <h1>Choose Your Hotel</h1>
      <p>Tap on your favourite</p>

      <div className="grid grid-rows-none md:grid-cols-2 lg:grid-cols-3 py-4 gap-2 md:gap-4">
        <div
          className="w-full h-[350px] object-cover col-span-2 md:col-span-1 row-span-1 xl:col-span-1 relative"
          style={{
            borderRadius: "25px",
            border: "3px solid rgb(255, 255, 255)",
            boxShadow: "rgb(19 15 235 / 15%) 1px 2px 20px",
          }}
        >
          <p className="">Wyndham Batumi</p>
          {/* <div className="round"></div> */}
          {/* main base Hotel Image */}
          <div className="flex justify-center">
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
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
            {/* 1 */}
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/391436436.jpg?k=5cc7b048a73c5a270d2ad144ccf7b22d9bbb7d82ee12360a6761beffdac0d27f&o=&hp=1"
              width={70}
              alt=""
              className={styles.img}
              onMouseEnter={() =>
                setSelectedImg(
                  "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/391436436.jpg?k=5cc7b048a73c5a270d2ad144ccf7b22d9bbb7d82ee12360a6761beffdac0d27f&o=&hp=1"
                )
              }
              //   onMouseLeave={() =>
              //     setSelectedImg(
              //       "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/391436436.jpg?k=5cc7b048a73c5a270d2ad144ccf7b22d9bbb7d82ee12360a6761beffdac0d27f&o=&hp=1"
              //     )
              //   }
            />
            {/* 2 */}
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/391436437.jpg?k=0eb256c50de607b6887087c76a9cc2c24b54f67726319bc438afd8b1d9dd8c98&o=&hp=1"
              width={70}
              alt=""
              className={styles.img}
              onMouseEnter={() =>
                setSelectedImg(
                  "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/391436437.jpg?k=0eb256c50de607b6887087c76a9cc2c24b54f67726319bc438afd8b1d9dd8c98&o=&hp=1"
                )
              }
              //   onMouseLeave={() =>
              //     setSelectedImg(
              //       "https://t-cf.bstatic.com/xdata/images/hotel/max1280x900/391436436.jpg?k=5cc7b048a73c5a270d2ad144ccf7b22d9bbb7d82ee12360a6761beffdac0d27f&o=&hp=1"
              //     )
              //   }
            />
            {/* 3 */}
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/391436453.jpg?k=51367ba42a7af6bca5799ddde5136757e85c5aa6dc1cf89064f7aa15078bcd64&o=&hp=1"
              width={70}
              alt=""
              className={styles.img}
              onMouseEnter={() =>
                setSelectedImg(
                  "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/391436453.jpg?k=51367ba42a7af6bca5799ddde5136757e85c5aa6dc1cf89064f7aa15078bcd64&o=&hp=1"
                )
              }
            />
            {/* 4 */}
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/292611194.jpg?k=e2164587614309533dc4aa776a4f90688aa682fdfc90da5d8a12f3a8ab3bb15a&o=&hp=1"
              width={70}
              className={styles.img}
              alt=""
              onMouseEnter={() =>
                setSelectedImg(
                  "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/292611194.jpg?k=e2164587614309533dc4aa776a4f90688aa682fdfc90da5d8a12f3a8ab3bb15a&o=&hp=1"
                )
              }
            />
            {/* 5 */}
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/391436455.jpg?k=67150d3e222bdb453acac880ac0279d1dfb3f011459061a357ea33b69b97bcb0&o=&hp=1"
              width={70}
              alt=""
              className={styles.img}
              onMouseEnter={() =>
                setSelectedImg(
                  "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/391436455.jpg?k=67150d3e222bdb453acac880ac0279d1dfb3f011459061a357ea33b69b97bcb0&o=&hp=1"
                )
              }
            />
            {/* 6 */}
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/292611278.jpg?k=22d8941a01b98f49d59d631cd4c07660cb4c352e4f3774331a05a0da99dfd755&o=&hp=1"
              width={70}
              alt=""
              className={styles.img}
              onMouseEnter={() =>
                setSelectedImg(
                  "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/292611278.jpg?k=22d8941a01b98f49d59d631cd4c07660cb4c352e4f3774331a05a0da99dfd755&o=&hp=1"
                )
              }
            />
            {/* 7 */}
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/292611139.jpg?k=568cb723aec1ec2c12d4d3c7bddb3c06898de45f60b2611c7897ef44f501edaa&o=&hp=1"
              width={70}
              alt=""
              className={styles.img}
              onMouseEnter={() =>
                setSelectedImg(
                  "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/292611139.jpg?k=568cb723aec1ec2c12d4d3c7bddb3c06898de45f60b2611c7897ef44f501edaa&o=&hp=1"
                )
              }
            />
            <img
              src="https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/292611329.jpg?k=289e33b1ed4a7b07b3243657b600d9d0cb934b74c795b7e16ca2b38d2961ac16&o=&hp=1"
              width={70}
              alt=""
              className={styles.img}
              onMouseEnter={() =>
                setSelectedImg(
                  "https://t-cf.bstatic.com/xdata/images/hotel/max1024x768/292611329.jpg?k=289e33b1ed4a7b07b3243657b600d9d0cb934b74c795b7e16ca2b38d2961ac16&o=&hp=1"
                )
              }
            />
          </div>
          <div className="flex justify-start mt-[3px] mx-4 md:mx-1">
            <p className="text-sm text-gray-400">1 night, 2 adults</p>
          </div>
          <div className="flex justify-start -mt-1 mx-4 md:mx-1">
            <p className="font-medium">USD 170</p>
          </div>
          <div className="flex justify-end -mt-[2.7rem] mx-4 md:mx-1">
            <div className="">
              <p>Fabulous</p>
              <p className="text-[14px] mr-2 text-gray-400 -mt-1">
                1,341 reviews
              </p>
            </div>

            <div
              className="bg-[#003580] w-[32px] h-[32px] mt-[4px] flex justify-center items-center"
              style={{ borderRadius: "5px 5px 10px 0px" }}
            >
              <p className="text-[#ededed] font-medium">8.7</p>
            </div>
          </div>
        </div>
        <div
          className="w-full h-[350px] object-cover col-span-2 md:col-span-1 row-span-1 xl:col-span-1"
          style={{
            borderRadius: "25px",
            border: "3px solid rgb(255, 255, 255)",
            boxShadow: "rgb(19 15 235 / 15%) 1px 2px 20px",
          }}
        >
          <p>Standard</p>
          <div className="round"></div>
        </div>
        <div
          className="w-full h-[350px] object-cover col-span-2 md:col-span-2 row-span-1 lg:col-span-1"
          style={{
            borderRadius: "25px",
            border: "3px solid rgb(255, 255, 255)",
            boxShadow: "rgb(19 15 235 / 15%) 1px 2px 20px",
          }}
        >
          <p>Premium</p>
          <div className="round"></div>
        </div>
      </div>
    </div>
  );
};

export default HotelPlans;
