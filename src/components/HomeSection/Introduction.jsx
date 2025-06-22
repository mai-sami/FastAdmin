import React from "react";
import "./style.css";
import introImg from "../../assets/images/intro.jpg";

import { Button } from "react-bootstrap";
import { useTranslation } from "react-i18next";
function Introduction() {
  const { t } = useTranslation();

  return (
    <div className="introduction">
      <>
        <div className="row w-100 justify-content-between">
          <p className="com">،،</p>
          <div className="col-md-6 intro">
            <h1 className="title">
              {t("Platform")} {t("Miner")}{" "}
            </h1>
            <p className="sub-title">{t("textInto")}</p>
            <Button className="join-now btn"> {t("Join")} </Button>
            <Button className="download-app btn"> {t("app")} </Button>
          </div>
          <div className="col-md-6 ">
            <img
              id="image__section"
              src={introImg}
              alt="introImg"
              className="w-100"
            />
          </div>
        </div>
      </>
    </div>
  );
}

export default Introduction;

// يتم ذلك عبر ايداع الأموال وشراء خطط التعدين
