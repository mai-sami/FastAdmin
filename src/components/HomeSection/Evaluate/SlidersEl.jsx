import React, { useContext } from "react";
import Slider from "react-slick";
import one from "../../../assets/images/one.jpg";
import two from "../../../assets/images/Ellipse 33.png";
import three from "../../../assets/images/Ellipse 32.png";
import four from "../../../assets/images/seven.jpg";
import five from "../../../assets/images/تنزيل.jpg";
import six from "../../../assets/images/Ellipse 31.png";
import { themeContext } from "../../../context/themeContext";

const data = [
  { text: "الدكتور عز الدين", image: one, subTitle: "من أروع التطبيقات" },
  { text: "الدكتور عز الدين", image: five, subTitle: "من أروع التطبيقات" },
  { text: "الدكتور عز الدين", image: two, subTitle: "من أروع التطبيقات" },
  { text: "الدكتور عز الدين", image: three, subTitle: "من أروع التطبيقات" },
  { text: "الدكتور عز الدين", image: four, subTitle: "من أروع التطبيقات" },
  { text: "الدكتور عز الدين", image: six, subTitle: "من أروع التطبيقات" },
];
function SlidersEl() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const [theme, setTheme] = useContext(themeContext);

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {data.map((item) => (
          <div
            className={theme.theme === "light" ? "relateBox" : "BlackrelateBox"}
          >
            <img src={item.image} alt="one" className="image_slider" />
            <div className="reate_evel">
              <p className="text__cinterP">{item.text}</p>
              <p className="p__P">{item.subTitle}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlidersEl;
