import React, { useContext } from "react";
import "./style.css";
import userStop from "../../../assets/images/userStop.png";
import userse from "../../../assets/images/userse.png";
import info from "../../../assets/images/info.png";

import { Col, Row } from "react-bootstrap";
import StatisticsBox from "./Statistics/StatisticsBox";
import { themeContext } from "../../../context/themeContext";
var lists = [
  {
    image: userse,
    role: "3",
    name: "إجمالي عدد المشتركين بالموقع",
    number: 33,
  },
  {
    image: userStop,
    role: "1",
    name: "إجمالي عدد الرسائل المفتوحة",
    number: 33,
  },
  { image: info, name: "إجمالي عدد الرسائل المغلقة", role: "2", number: 33 },
];

function Home() {
  const getBadgeColor = (role) => {
    switch (role) {
      case "1":
        return "#EE6A6E";
      case "2":
        return "#F4BB50";
      case "3":
        return "#7CB264";
      default:
        return "#0000";
    }
  };
  const [theme, setTheme] = useContext(themeContext);
  return (
    <div className="admin_home">
      <p>لوحة التحكم</p>
      <div className="details_box">
        {lists.map((list) => (
          <Col id="first_st" sm={4}>
            <div
              className={
                theme.theme === "light" ? "st__IndexS" : "inactiveHeader"
              }
            >
              <div
                className="back__imge"
                style={{ background: ` ${getBadgeColor(list.role)} ` }}
              >
                <img
                  className="back__imges"
                  src={list.image}
                  alt="show number"
                />
              </div>
              <div className="text_number">
                <span className="pad__in__P">{list.name} </span>
                <span
                  className="numbers"
                  style={{ color: ` ${getBadgeColor(list.role)} ` }}
                >
                  {list.number}
                </span>
              </div>
            </div>
          </Col>
        ))}
      </div>
      <br />
      <p>الاحصائيات</p>
      <StatisticsBox />
    </div>
  );
}

export default Home;
