import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { useSelector, useDispatch } from "react-redux";

const MapComponent = () => {
  const coordinates = useSelector((state) => state.coordinates);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCzTm9ZhDTvk1dTqrtD1F2YYcWk9WbHQ7o",
  });

  if (!isLoaded) return <div>Loading...</div>;

  console.log(coordinates.x);

  return (
    <>
      <div className="hidden lg:flex justify-center">
        <GoogleMap
          zoom={8}
          center={{ lat: coordinates.x, lng: coordinates.y }}
          mapContainerClassName="map-container"
          className="w-[180%] h-[80vh]"
        ></GoogleMap>
      </div>

      {/* for small screens */}
      <div className="flex lg:hidden justify-center">
        <GoogleMap
          zoom={7}
          center={{ lat: coordinates.x, lng: coordinates.y }}
          mapContainerClassName="map-container-for-small-screens"
          className="w-[180%] h-[80vh]"
        ></GoogleMap>
      </div>
    </>
  );
};

export default MapComponent;
