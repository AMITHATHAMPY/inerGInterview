import React from "react";
import {
  Row,
  Button,
  Col,
  Label,
  FormGroup,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

import Select from "react-select";

const customStyles = {
  control: (base, state) => ({
    ...base,
    background: "#040620",
    borderStyle: "hidden",
    // height: "5px",
  }),
  menu: (base) => ({
    ...base,
    background: "#040620",
    hyphens: "auto",
    textAlign: "left",
  }),
  menuList: (base) => ({
    ...base,
    background: "#040620",
  }),
  singleValue: (base) => ({
    ...base,
    background: "#040620",
    color: "#9C9DA9",
    fontWieght: 300,
  }),
  option: (base, state) => ({
    ...base,
    background: "#040620",
    fontWieght: 300,
    color: "white",
    "&:hover": {
      background: "#3A3E6B",
    },
  }),
};
class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Modal isOpen={this.props.open} centered>
          <ModalHeader style={{ backgroundColor: "#23274f", color: "white" }}>
            <h4>Filter</h4>
          </ModalHeader>
          <ModalBody style={{ backgroundColor: "#23274f", color: "white" }}>
            <Row>
              <Col xs={12}>
                <FormGroup>
                  <Label for="exampleSelect">State</Label>
                  <Select
                    value={this.props.state}
                    styles={customStyles}
                    className="react-select react-select-primary"
                    classNamePrefix="react-select"
                    placeholder="Select....."
                    onChange={this.props.handleChange}
                    options={this.props.stateList}
                  />
                </FormGroup>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter style={{ backgroundColor: "#23274f", color: "white" }}>
            <Button
              // color="default"
              className="mr-xs"
              onClick={this.props.filterClose}
            >
              Close
            </Button>
            <Button
              // color="default"
              className="mr-xs"
              onClick={this.props.filterClear}
            >
              Clear
            </Button>
            <Button
              // color="inverse"
              className="mr-xs"
              caret
              onClick={this.props.applyFilter}
            >
              Apply Filter
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default Modals;
