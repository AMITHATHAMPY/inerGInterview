import React from "react";
import { Row, Card, CardBody, Button, CardTitle, Col } from "reactstrap";
import SubCards from "./card";
import { getOverview } from "../data/actions";
import { connect } from "react-redux";
import Modals from "../components/filter/filter";

class OverView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: {},
      params: "india",
      title: "Covid in India",
      overview: [],
      open: false,
    };
  }
  componentDidMount() {
    this.props.getOverview(this.state.params);
  }
  componentDidUpdate(prevState, prevProps) {
    if (this.props.overview != prevProps.overview) {
      this.setState({
        overview: this.props.overview,
      });
    }
  }
  applyFilter = () => {
    this.setState(
      {
        open: false,
        title: "Covid in" + " " + this.state.params,
      },
      () => {
        this.props.getOverview(this.state.params);
      }
    );
  };
  filterOpen = () => {
    this.setState({
      open: true,
    });
  };
  filterClear = () => {
    this.setState(
      {
        state: {},
        params: "india",
        title: "Covid in India",
      },
      () => {
        this.props.getOverview(this.state.params);
      }
    );
  };
  filterClose = () => {
    this.setState({
      open: false,
    });
  };
  handleChange = (selectedOption) => {
    this.setState({
      state: selectedOption,
      params: selectedOption.key,
    });
  };
  render() {
    const { overview, params, state } = this.state;
    return (
      <>
        <div>
          <Modals
            open={this.state.open}
            state={this.state.state}
            stateList={this.props.stateList}
            handleChange={this.handleChange}
            filterClose={this.filterClose}
            filterClear={this.filterClear}
            applyFilter={this.applyFilter}
          />
        </div>
        <Card style={{ backgroundColor: "#191B39", borderRadius: "10px" }}>
          <Row>
            <Col
              style={{
                paddingTop: "20px",
                textAlign: "left",
                paddingLeft: "40px",
                color: "white",
              }}
            >
              <h4>{this.state.title}</h4>
            </Col>
            <Col
              className="float-right"
              style={{
                textAlign: "right",
                paddingRight: "40px",
                paddingTop: "20px",
              }}
            >
              <Button onClick={this.filterOpen}>Filter</Button>
            </Col>
          </Row>

          <CardBody>
            <Row cellSpacing={1}>
              <SubCards
                title="Total Cases"
                count={overview[0]}
                variant="warning"
              />
              <SubCards
                title="Active Cases"
                count={overview[1]}
                variant="info"
              />
            </Row>
            <br></br>
            <Row cellSpacing={1}>
              <SubCards
                title="Recovered Cases"
                count={overview[2]}
                variant="success"
              />
              <SubCards
                title="Death Cases"
                count={overview[3]}
                variant="danger"
              />
            </Row>
          </CardBody>
        </Card>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    overview: state.overview,
    stateList: state.stateList,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getOverview: (params) => dispatch(getOverview(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(OverView);
