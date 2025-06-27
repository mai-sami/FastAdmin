import React from "react";
import "../style.css";
import { Element } from "react-scroll";
import SlidersEl from "./SlidersEl";

function Other() {
  return (
    <Element name="customer">
      <div className="others">
        <div className="text__cinter">
          <p className="text__cinterP">
            تقييمات عملائنا <span className="title__cinter">اليومية</span>
          </p>
          <p className="p__P">تعرف على لأفضل اختياراتنا </p>
        </div>
        <SlidersEl />
      </div>
    </Element>
  );
}

export default Other;
