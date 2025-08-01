import React, { useContext } from "react";
import "../style.css";
import { Badge, Col } from "react-bootstrap";
import adduser from "../../../../assets/images/info.png";
import efood from "../../../../assets/images/info.png";
import greemFood from "../../../../assets/images/info.png";
import redFood from "../../../../assets/images/info.png";
import { themeContext } from "../../../../context/themeContext";
import { Link } from "react-router-dom";
import ChartElemnt from "./ChartElemnt";
import MailIcon from "@mui/icons-material/Mail";

var Shows = [
  {
    image: adduser,
    time: "صفحة لبرومو كود",
    role: "4",
    number: "**",
    route: "/admin/promo",
  },
  {
    image: efood,
    time: "ارسال رسائل لجميع المستخدمين",
    role: "5",
    number: "**",
    route: "/admin/massge",
  },
  {
    image: greemFood,
    time: "عرض جميع المؤثرين",
    role: "6",
    number: "**",
    route: "/admin/influencer",
  },
  {
    image: redFood,
    time: "عرض جميع المؤثرين",
    role: "7",
    number: "**",
    route: "/admin/influencer",
  },
];
function StatisticsBox() {
  const getBadgeColor = (role) => {
    switch (role) {
      case "1":
        return "#EE6A6E";
      case "2":
        return "#f5ae2b";
      case "3":
        return "#83de5c";
      case "4":
        return "#fac975";
      case "5":
        return "#97dcf8";
      case "6":
        return "#baf87d";
      case "7":
        return "#fd9b9b";
    }
  };
  const [theme, setTheme] = useContext(themeContext);

  return (
    <div className="row StatisticsBox">
      <div
        className={
          theme.theme === "light" ? "StatisticsBox1" : "inactiveHeader"
        }
      >
        <Col>
          <div className="box__index">
            <p className="box__index__P">تفاصيل سريعة</p>
            {Shows.map((show) => (
              <div className="cell__index">
                <div
                  className="regtangle"
                  style={{ background: ` ${getBadgeColor(show.role)} ` }}
                >
                  <img
                    src={show.image}
                    className="image_deatils"
                    alt="deatils"
                    style={{ color: ` ${getBadgeColor(show.role)} ` }}
                  />
                </div>

                <span className="regtangle__spanss"> {show.time} </span>
                <span className="regtangle__span">{show.number}</span>
                <Link to={`${show.route}`}>
                  <button
                    className="regtangle__button"
                    style={{ background: ` ${getBadgeColor(show.role)} ` }}
                  >
                    عرض
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </Col>
      </div>
      <div className="StatisticsBox1">
        إحصائيات سريعة
        <ChartElemnt />
      </div>
    </div>
  );
}

export default StatisticsBox;
