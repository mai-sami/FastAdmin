import { Animation, Palette } from "@devexpress/dx-react-chart";
import {
  Chart,
  Legend,
  PieSeries,
} from "@devexpress/dx-react-chart-material-ui";
import { Component } from "react";
import "../style.css";
const PromoCode = JSON.parse(localStorage.getItem("PromoCode"));
const userCount = JSON.parse(localStorage.getItem("userCount"));
const dataCount = JSON.parse(localStorage.getItem("CountDeatilsPublic"));
const Influencer = JSON.parse(localStorage.getItem("Influencers"));

console.log(Influencer.length);
const data = [
  { region: "عدد المستخدمين في النظام", val: dataCount.userCount || 0 },
  { region: "عدد المؤثرين في النظام  ", val: Influencer.length || 0 },
  {
    region: "عدد الرسائل الغير مقروءة  ",
    val: dataCount.closedTickets?.length || 0,
  },
  { region: "عدد لبرومو كود   ", val: PromoCode.data.length || 0 },
  { region: "عدد الرسائل المرسلة ", val: dataCount.openTickets?.length || 0 },
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
            scheme={["#64c7ef", "#7CB264", "#8face9", "#ffc06b", "#EE6A6E"]}
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
