import React from "react";
import { Card, CardTitle, CardText, Col } from "reactstrap";

function Overview(props) {
  return (
    <>
      <Col lg={6} xs={6} sm={6} md={6}>
        <Card
          body
          inverse
          color={props.variant}
          style={{ borderRadius: "10px" }}
        >
          <CardTitle>
            <b>{props.title}</b>
          </CardTitle>
          <CardText>{props.count}</CardText>
        </Card>
      </Col>
    </>
  );
}

export default Overview;
