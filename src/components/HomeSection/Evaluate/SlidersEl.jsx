import React, { useContext } from "react";
import Slider from "react-slick";
import one from "../../../assets/images/one.jpg";
import two from "../../../assets/images/Ellipse 33.png";
import three from "../../../assets/images/Ellipse 32.png";
import four from "../../../assets/images/seven.jpg";
import five from "../../../assets/images/تنزيل.jpg";
import six from "../../../assets/images/Ellipse 31.png";
import { themeContext } from "../../../context/themeContext";
import Rating from "@mui/material/Rating";

const data = [
  {
    text: "الدكتور عز الدين",
    image: one,
    rate: 5,
    subTitle: " ♥️تحية من قلب غزة النابض على مصداقيتكم العالية",
  },
  {
    text: "الدكتور عز الدين",
    image: five,
    rate: 4.5,
    subTitle: "أفضل مكان للاسثمار، كل الدعم والامتنان لكم",
  },
  {
    text: "الدكتور عز الدين",
    image: two,
    rate: 5,
    subTitle: "نوجه لكم خالص التحيات بالتوفيق لنا ولكم",
  },
  {
    text: "الدكتور عز الدين",
    image: three,
    rate: 5,
    subTitle: "استثمار جميل، كل الاحترام والتقدير على المصداقية والشفافية ",
  },
  {
    text: "الدكتور عز الدين",
    image: four,
    rate: 5,
    subTitle: "أفضل شركه استثمار الدعم الفني جدا ممتاز وسريع",
  },
  {
    text: "الدكتور عز الدين",
    image: six,
    rate: 4.5,
    subTitle: "♥️أفضل مكان للاسثمار، كل الدعم والامتنان لكم",
  },
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
              <Rating
                name="half-rating-read"
                defaultValue={item.rate}
                precision={0.5}
                readOnly
                className="rating__slider"
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SlidersEl;
