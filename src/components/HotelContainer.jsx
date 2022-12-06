import React from 'react'
import Hotel from './Hotel'
import { WyndhamBatumiImages } from "../data/HotelImages";

const HotelContainer = () => {
  return (
    <div className="max-w-[1240px] m-auto py-16 px-4 text-center">
        <h1 className="text-3xl text-[#f51767]">Choose Your Hotel</h1>
        <p className="text-lg">Tap on your favourite</p>
        <div className="grid grid-rows-none md:grid-cols-2 lg:grid-cols-3 py-4 gap-2 md:gap-4">
            <Hotel
              HotelTitle="Wyndham Batumi"
              stars="5"
              HotelSelectedImage={WyndhamBatumiImages[0].image}
              HotelImages={WyndhamBatumiImages}
              priceOnOneDay="170"
              reviews="1,341"
              rating="8.6"
            />
            <Hotel
              HotelTitle="Kakheti Batumi"
              stars="3"
              HotelSelectedImage={WyndhamBatumiImages[0].image}
              HotelImages={WyndhamBatumiImages}
              priceOnOneDay="170"
              reviews="1,341"
              rating="8.6"
            />
            <Hotel
              HotelTitle="Kakheti Batumi"
              stars="3"
              HotelSelectedImage={WyndhamBatumiImages[0].image}
              HotelImages={WyndhamBatumiImages}
              priceOnOneDay="170"
              reviews="1,341"
              rating="8.6"
              checkForMediumScreen={true}
            />
        </div>
      </div>
  )
}

export default HotelContainer