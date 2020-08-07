import React from "react";
import "./App.css";
import LineChart from "./components/LineChart";
import PieChart from "./components/PieChart";
import MapView from "./components/Map/index";
import OverView from "./components/OverViewCards";
import { Row, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      <>
        <Row cellSpacing={1}>
          <Col lg={6} xs={12}>
            <OverView />
          </Col>

          <Col lg={6} xs={12}>
            <MapView />
          </Col>
        </Row>
        <br></br>
        <Row cellSpacing={1}>
          <Col lg={6} xs={12}>
            <PieChart />
          </Col>

          <Col lg={6} xs={12}>
            <LineChart />
          </Col>
        </Row>
      </>
    </div>
  );
}

export default App;
