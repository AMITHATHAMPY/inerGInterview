import React, { Component } from "react";
import { Map, TileLayer } from "react-leaflet";
import "./leaf.css";
import "leaflet/dist/leaflet.css";
import { Row, Col, Card, CardTitle, CardText } from "reactstrap";
import data from "../../assets/data";
import Markers from "./VenueMarkers";

class MapView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLocation: { lat: 12.2602, lng: 77.1461 },
      zoom: 5,
    };
  }
  render() {
    const { currentLocation, zoom } = this.state;
    return (
      <Card
        body
        inverse
        style={{ backgroundColor: "#191B39", borderRadius: "10px" }}
      >
        <Map center={currentLocation} zoom={zoom}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          <Markers states={data.states} />
        </Map>
      </Card>
    );
  }
}
export default MapView;
