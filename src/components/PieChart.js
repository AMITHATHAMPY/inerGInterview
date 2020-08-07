import React from "react";
import { Row, Card, CardBody, Button } from "reactstrap";
import Plot from "react-plotly.js";
import { getPie } from "../data/actions";
import { connect } from "react-redux";
import Modals from "../components/filter/filterPie";

class PieChart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: {},
      params: "total",
      revisionNo: 1,
      data: [],
      layout: {
        autosize: true,
        margin: {
          l: 50,
          r: 50,
          b: 50,
          t: 50,
          pad: 0,
        },
        height: 400,
        paper_bgcolor: "#191B39",
        font: {
          size: 14,
          color: "white",
        },
        width: 500,
        title: "Covid in India",
      },
      open: false,
    };
  }
  componentDidMount() {
    this.props.getPie(this.state.params);
  }
  componentDidUpdate(prevState, prevProps) {
    if (this.props.pieData != this.state.data) {
      this.setState({
        data: this.props.pieData,
      });
    }
  }
  applyFilter = () => {
    this.setState(
      {
        open: false,
      },
      () => {
        this.props.getPie(this.state.params);
        this.setState({ revisionNo: this.state.revisionNo + 1 });
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
        params: "total",
      },
      () => {
        this.props.getPie(this.state.params);
        this.setState({ revisionNo: this.state.revisionNo + 1 });
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
          <div
            className="float-right"
            style={{
              textAlign: "right",
              paddingRight: "20px",
              paddingTop: "20px",
            }}
          >
            <Button className="mr-xs" onClick={this.filterOpen}>
              Filter
            </Button>
          </div>
          <CardBody>
            <Plot
              data={this.props.pieData}
              layout={this.state.layout}
              revision={this.state.revisionNo}
              config={{ displayModeBar: false }}
            />
          </CardBody>
        </Card>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    pieData: state.pieData,
    stateList: state.stateList,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getPie: (params) => dispatch(getPie(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PieChart);
