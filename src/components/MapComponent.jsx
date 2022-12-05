// import React from "react";
// import { Component } from "react";
// import { Map, GoogleApiWrapper } from "google-maps-react";
// import { useDispatch, useSelector } from "react-redux";

// class MapComponent extends Component {
//   render() {
//     return (
//       <div className="googleMap relative flex justify-center h-96">
//         <Map
//           google={this.props.google}
//           style={{ width: "100%", height: "100%" }}
//           zoom={7}
//           initialCenter={{
//             lat: 42.2756944,
//             lng: 43.7540462,
//           }}
//         />
//       </div>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyDkN7jTAsN0FwjBpoyeM4z2p-wUgWxNFZI",
// })(MapComponent);

import { compose, withProps } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

const MapComponent = compose(
  withProps({
    googleMapURL:
      "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px`, width: "auto" }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props) => (
  <GoogleMap
    defaultZoom={7}
    defaultCenter={{ lat: 42.2756944, lng: 43.7540462 }}
  >
    {props.isMarkerShown && (
      <Marker position={{ lat: -34.397, lng: 150.644 }} />
    )}
  </GoogleMap>
));

export default MapComponent;

//
//   /* <MyMapComponent isMarkerShown />// Map with a Marker
// <MyMapComponent isMarkerShown={false} />// Just only Map */
//
