import React from "react";
import "./GoogleMap.css";
interface PropTypes {}

const GoogleMap: React.FC<PropTypes> = () => {
  return (
    <div className="googleMap">
      <div id="google-maps-canvas">
        <iframe
          className="map-frame"
          src="https://www.google.com/maps/embed/v1/place?q=C.D.A+Market,+Chattogram,+Bangladesh&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
      </div>
      <a
        className="googlemaps-made"
        rel="nofollow"
        href="https://www.bootstrapskins.com/themes"
        id="grab-map-data"></a>
    </div>
  );
};

export default GoogleMap;
