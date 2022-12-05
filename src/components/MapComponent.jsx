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
    <div className="flex justify-center">
      <GoogleMap
        zoom={8}
        center={{ lat: coordinates.x, lng: coordinates.y }}
        style={{ width: "50%", height: "100%" }}
        mapContainerClassName="map-container"
      ></GoogleMap>
    </div>
  );
};

export default MapComponent;
