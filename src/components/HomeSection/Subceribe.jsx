import React from "react";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";

function Subceribe() {
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
      </div>
    </Element>
  );
}

export default Subceribe;
