import {
  TEST_CONSTANT_VAR,
  GET_OVERVIEW,
  GET_PIE,
  GET_LINE,
} from "./constants";
import count from "../assets/counts.json";
import line from "../assets/line.json";

const initStateData = {
  stateList: [
    { key: "india", label: "All" },
    { key: "kerala", label: "Kerala" },
    { key: "Karnataka", label: "Karnataka" },
    { key: "Tamilnadu", label: "Tamilnadu" },
    { key: "Andhra", label: "Andhra" },
    { key: "Telungana", label: "Telungana" },
  ],
  overview: [],
  lineData: [
    {
      x: ["Feb", "March", "April", "May"],
      y: [10, 20, 30, 10],
      type: "scatter",
      name: "Total",
    },

    {
      x: ["Feb", "March", "April", "May"],
      y: [50, 55, 17, 72],
      type: "scatter",
      name: "Active",
    },
    {
      x: ["Feb", "March", "April", "May"],
      y: [90, 29, 100, 150],
      type: "scatter",
      name: "Recovered",
    },

    {
      x: ["Feb", "March", "April", "May"],
      y: [53, 75, 16, 75],
      type: "scatter",
      name: "Death",
    },
  ],
  pieData: [
    {
      values: [19, 26, 25, 20],
      labels: ["Total", "Active", "Recovered", "Death"],
      type: "pie",
    },
  ],
};

const datareducer = (state = initStateData, action) => {
  switch (action.type) {
    case TEST_CONSTANT_VAR:
      return {
        ...state,
        fname: "calicut",
        faddr: "",
      };
    case GET_OVERVIEW:
      return {
        ...state,
        overview: count[action.payload],
      };
    case GET_PIE:
      let data = state.pieData;
      data[0].values = count[action.payload];
      return {
        ...state,
        pieData: data,
      };
    case GET_LINE:
      let datas = state.lineData;
      state.lineData.map((item, i) => {
        datas[i].y = line[action.payload][i];
      });
      console.log(datas);
      return {
        ...state,
        lineData: datas,
      };

    default:
      return state;
  }
};

export default datareducer;
