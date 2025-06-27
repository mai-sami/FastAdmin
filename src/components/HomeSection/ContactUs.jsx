import React, { useContext } from "react";
import "./style.css";
import { Button } from "react-bootstrap";
import { Element } from "react-scroll";
import introImg from "../../assets/images/contact.png";
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";

function ContactUs() {
  const { t } = useTranslation();
  const new_Langs = localStorage.getItem("lang");
  const [theme, setTheme] = useContext(themeContext);

  return (
    <div>
      <Element name="comuncation">
        <div className="ContactSection">
          <div className=" ">
            <img
              src={introImg}
              alt="about"
              className={
                new_Langs === "ar" ? "about__sections" : "about__sectionsDark"
              }
            />
          </div>
          <div className="sontactUsBox" >
            <div
              className={
                theme.theme === "light" ? "content_Box" : "BlacksontactUsBox"
              }
            >
              <div className="disBlock">
                <p className="text__cinterP">{t("question")}</p>

                <p className="p__P">{t("stomer service")} </p>
              </div>
              <Button className="join-now btn">{t("Contact US")}</Button>
            </div>
          </div>
        </div>
      </Element>
    </div>
  );
}

export default ContactUs;
