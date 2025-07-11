import { Animation, Palette } from "@devexpress/dx-react-chart";
import {
  Chart,
  Legend,
  PieSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { Component } from "react";
import "../admin/Dashboard/style.css";
// const dataCount = JSON.parse(localStorage.getItem("CountDeatils"));
const data = [
  { region: "عدد المشتركين في النظام", val: 5 },
  { region: "عدد المؤثرين في النظام  ", val: 30 },
  { region: "عدد الرسائل الغير مقروءة  ", val: 55 },
  { region: "عدد لبرومو كود   ", val: 40 },
  { region: "عدد الرسائل المرسلة ", val: 12 },
];
export class CardDeatils extends Component {
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

export default CardDeatils;
