import { Animation, Palette } from "@devexpress/dx-react-chart";
import {
  Chart,
  Legend,
  PieSeries,
} from "@devexpress/dx-react-chart-material-ui";
import React, { Component } from "react";
import "../style.css";
const data = [
  { region: "عدد المستخدمين في النظام", val: 70 },
  { region: "عدد المؤثرين في النظام  ", val: 30 },
  { region: "عدد الرسائل الغير مقروءة  ", val: 20 },
  { region: "عدد لبرومو كود   ", val: 40 },
  { region: "عدد الرسائل المرسلة ", val: 30 },
];
export class ChartElemnt extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data,
    };
  }

  render() {
    const { data: chartData } = this.state;
    return (
      <div className="chartNews">
        <Chart data={chartData}>
          <Palette
            scheme={["#64c7ef", "#7CB264", "#8B8A8A", "#84C504", "#EE6A6E"]}
          />
          <PieSeries
            valueField="val"
            argumentField="region"
            innerRadius={0.8}
          />
          <Animation />
          <Legend />
        </Chart>
      </div>
    );
  }
}

export default ChartElemnt;
