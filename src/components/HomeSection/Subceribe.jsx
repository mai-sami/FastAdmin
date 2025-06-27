import React from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import ton from "../../assets/images/ton.jpg";
import bnb from "../../assets/images/bnb2.jpg";
import lit from "../../assets/images/lit.jpg";
import tornpng from "../../assets/images/tornpng.png";
import usdt from "../../assets/images/usdt.jpg";

 
const Image_data = [
  { image: lit, text: "Lit Coin", role: "Lit" },
  { image: tornpng, text: "Tron Coin", role: "Tron" },
  { image: usdt, text: "Usdt Tether Coin", role: "Usdt" },
  { image: ton, text: "Ton Coin", role: "Ton" },
  { image: bnb, text: "BNB Coin", role: "BNB" },
];

function Subceribe() {
  const getBadgeColor = (role) => {
    switch (role) {
      case "Lit":
        return "rgb(229 185 25)";
      case "Tron":
        return "red";
      case "Usdt":
        return "green";
      case "Ton":
        return "#3131e5b0";
      case "BNB":
        return "rgb(197 148 4)";
      default:
        return "gray";
    }
  };

  const { t } = useTranslation();
  return (
    <Element name="customer">
      <div className="others">
        <div className="text__cinter">
          <p className="text__cinterP">
            {t("energy")}
            <span className="title__cinter wating">{t("awaiting")}</span>
          </p>
          <p className="p__P">{t("picks")} </p>
        </div>
        <div className="flex_item">
          {Image_data.map((item) => (
            <div className="bolckwither">
              <img
                src={item.image}
                alt="imagw wither"
                className="image_wither"
              />
              <button
                style={{
                  border: `2px solid ${getBadgeColor(item.role)}!important`,
                  color: `${getBadgeColor(item.role)} `,

                  // backgroundColor: `${getBadgeColor(item.role)} `,
                }}
                className="textWither"
              >
                {item.text}
              </button>
            </div>
          ))}
        </div>
      </div>
    </Element>
  );
}

export default Subceribe;
