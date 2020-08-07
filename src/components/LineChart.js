import React from "react";
import { Row, Card, CardBody, Button } from "reactstrap";
import Plot from "react-plotly.js";
import { getLine } from "../data/actions";
import { connect } from "react-redux";
import Modals from "../components/filter/filter";

class Graph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      state: {},
      params: "total",
      open: false,
      data: [],
      revision: 1,
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
        // width: 600,
        title: "Covid in India",
        plot_bgcolor: "#040620",
        paper_bgcolor: "#191B39",
        font: {
          size: 14,
          color: "white",
        },
      },
    };
  }

  componentDidMount() {
    this.props.getLine(this.state.params);
  }
  componentDidUpdate(prevState, prevProps) {
    if (this.props.lineData != this.state.data) {
      this.setState({
        data: this.props.lineData,
      });
    }
  }
  applyFilter = () => {
    this.setState(
      {
        open: false,
      },
      () => {
        this.props.getLine(this.state.params);
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
        this.props.getLine(this.state.params);
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
              data={this.props.lineData}
              layout={this.state.layout}
              revision={this.state.revisionNo}
              useResizeHandler={true}
              style={{ width: "100%", height: "100%" }}
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
    lineData: state.lineData,
    stateList: state.stateList,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getLine: (params) => dispatch(getLine(params)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Graph);
