/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import Hotel from "./Hotel";
import { AllHotels } from "../../data/Hotels/Hotels";
import {
  BatumiHotels,
  SvanetiHotels,
  UshguliHotels,
  BorjomiHotels,
  BakurianiHotels,
} from "../../data/Hotels/Hotels";

import { useSelector, useDispatch } from "react-redux";
import { AppActions } from "../../redux/index";

const styles = {
  selectedLandmarkTitle: "flex justify-center",
  span: "text-white bg-[#f51767] px-2 py-1 rounded-sm",
};

const HotelContainer = () => {
  const dispatch = useDispatch();
  const selectedIdForFilteringHotels = useSelector(
    (state) => state.selectedIdForFilteringHotels
  );
  return (
    <div className="max-w-[1240px] m-auto py-16 px-4 text-center" id="hotels">
      <div className="flex justify-center">
        <h1 className="text-white bg-[#f51767] px-2 py-1 rounded-sm">
          3 step -
        </h1>
        <h1 className="text-white text-xs">h</h1>
        <h1 className="text-xl text-[#f51767] mt-1">Choose Your Hotels</h1>
      </div>

      <p className="text-md">
        <span>// </span> Add to Cart your favourite Landmarks and see filtered
        Hotels
      </p>
      {/* Hotel Titles which are added in Cart */}
      <div className="flex justify-center">
        {/* 1 ,2, 3 */}
        {selectedIdForFilteringHotels.trim().includes("1") && (
          <div
            className={styles.selectedLandmarkTitle}
            // onClick={() => {
            //   dispatch(
            //     AppActions.removeSelectedLandmarkid({
            //       idForSelectedHotels: "1",
            //     })
            //   );
            //   dispatch(AppActions.removeItem({ title: "Mestia, Svaneti" }));
            // }}
          >
            <h1 className="mt-2">
              <span className={styles.span}>Mestia, Svaneti</span>
            </h1>
          </div>
        )}
        {selectedIdForFilteringHotels.trim().includes("2") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>Ushguli</span>
            </h1>
          </div>
        )}
        {selectedIdForFilteringHotels.trim().includes("3") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>Batumi</span>
            </h1>
          </div>
        )}
        {/* 4, 5, 6 */}
        {selectedIdForFilteringHotels.trim().includes("4") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>kazbegi</span>
            </h1>
          </div>
        )}
        {selectedIdForFilteringHotels.trim().includes("5") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>kakheti</span>
            </h1>
          </div>
        )}
        {selectedIdForFilteringHotels.trim().includes("6") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>Ananuri</span>
            </h1>
          </div>
        )}
        {/* 7, 8 */}
        {selectedIdForFilteringHotels.trim().includes("7") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>Uflistsikhe</span>
            </h1>
          </div>
        )}
        {selectedIdForFilteringHotels.trim().includes("8") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>Tusheti</span>
            </h1>
          </div>
        )}
        {selectedIdForFilteringHotels.trim().includes("9") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>Borjomi</span>
            </h1>
          </div>
        )}
        {selectedIdForFilteringHotels.includes("ten") && (
          <div className={styles.selectedLandmarkTitle}>
            <h1 className="mt-2 ml-2">
              <span className={styles.span}>Bakuriani</span>
            </h1>
          </div>
        )}
      </div>
      <div className="grid grid-rows-none md:grid-cols-2 lg:grid-cols-3 py-4 gap-2 md:gap-4">
        {/* Every Hotel */}
        {selectedIdForFilteringHotels.trim().length === 0 &&
          AllHotels.map((item) => (
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

        {/* Svaneti_Hotels 1 ------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        {selectedIdForFilteringHotels.trim().includes("1") &&
          SvanetiHotels?.map((item) => (
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
        {/* Ushguli_Hotels 2 ------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        {selectedIdForFilteringHotels.trim().includes("2") &&
          UshguliHotels?.map((item) => (
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
        {/* Batumi_hotels 3 ------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        {selectedIdForFilteringHotels.trim().includes("3") &&
          BatumiHotels?.map((item) => (
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
        {/* Borjomi_hotels 9 ------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        {selectedIdForFilteringHotels.includes("9") &&
          BorjomiHotels?.map((item) => (
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
        {/* Bakuriani_hotels 10 ------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        {selectedIdForFilteringHotels.includes("ten") &&
          BakurianiHotels?.map((item) => (
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
