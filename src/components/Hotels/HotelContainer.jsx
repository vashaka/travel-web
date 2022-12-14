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
      {/* Hotel Titles which are added in Cart */}
      <div className="flex justify-center">
        {/* 1 ,2, 3 */}
        {selectedIdForFilteringHotels.includes("1") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2">
              <span className={styles.span}>Mestia, Svaneti</span>
            </h1>
          </div>
        )}
        {selectedIdForFilteringHotels.includes("2") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>Ushguli</span>
            </h1>
          </div>
        )}
        {selectedIdForFilteringHotels.includes("3") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>Batumi</span>
            </h1>
          </div>
        )}
        {/* 4, 5, 6 */}
        {selectedIdForFilteringHotels.includes("4") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>kazbegi</span>
            </h1>
          </div>
        )}
        {selectedIdForFilteringHotels.includes("5") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>kakheti</span>
            </h1>
          </div>
        )}
        {selectedIdForFilteringHotels.includes("6") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>Ananuri</span>
            </h1>
          </div>
        )}
        {/* 7, 8 */}
        {selectedIdForFilteringHotels.includes("7") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>Uflistsikhe</span>
            </h1>
          </div>
        )}
        {selectedIdForFilteringHotels.includes("8") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>Tusheti</span>
            </h1>
          </div>
        )}
        {selectedIdForFilteringHotels.includes("9") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>Borjomi</span>
            </h1>
          </div>
        )}
      </div>
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
