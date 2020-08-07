import React, { Fragment } from "react";
import { Marker } from "react-leaflet";
import { VenueLocationIcon } from "./VenueLocationIcon";
import MarkerPopup from "./MarkerPopup";

const VenueMarkers = (props) => {
  const { states } = props;

  const markers = states.map((state, index) => (
    <Marker key={index} position={state.geometry} icon={VenueLocationIcon}>
      <MarkerPopup data={state} />
    </Marker>
  ));

  return <Fragment>{markers}</Fragment>;
};

export default VenueMarkers;
