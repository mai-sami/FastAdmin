import React, { useState } from "react";
import { Button } from "react-bootstrap";
import introImg from "../../assets/images/10548.jpg";
import "./about.css";
import "./style.css";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";

function AboutSection() {
  const { t } = useTranslation();
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Element name="about">
      <div className="introductions">
        <div className="row w-100 justify-content-between">
          <div className="col-md-6 ">
            <img src={introImg} alt="about" id="image__sections" />
          </div>
          <div className="col-md-6 item_about">
            <h1 className="title">{t("about")}</h1>
            <div className="title_div">
              <p className="sub-title-about">
                {isReadMore ? (
                  <p>
                    {t("TeaxtAbout")?.slice(0, 351)}
                    <span className="read_more" onClick={toggleReadMore}>
                      {isReadMore ? `${t("Read")}` : `${t("Less")}`}
                    </span>
                  </p>
                ) : (
                  <p>
                    {t("TeaxtAbout")}
                    <span className="read_more" onClick={toggleReadMore}>
                      {isReadMore ? `${t("Read")}` : `${t("Less")}`}
                    </span>
                  </p>
                )}
              </p>
            </div>

            <Button className="joine" id="subscribe">
              {t("Join")}
            </Button>
          </div>
        </div>
      </div>
    </Element>
  );
}

export default AboutSection;
