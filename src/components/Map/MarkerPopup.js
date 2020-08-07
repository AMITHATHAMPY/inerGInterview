import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = (props) => {
  return (
    <Popup>
      <div className="poup-text">
        <b>{props.data.name}</b>
      </div>
      <div className="poup-text">
        {"Total Cases" + "" + ":" + props.data.total}
      </div>
      <div className="poup-text">
        {"Active Cases" + "" + ":" + props.data.active}
      </div>
      <div className="poup-text">
        {"Recovered Cases" + "" + ":" + props.data.Recovered}
      </div>
      <div className="poup-text">
        {"Death Cases" + "" + ":" + props.data.death}
      </div>
    </Popup>
  );
};

export default MarkerPopup;
