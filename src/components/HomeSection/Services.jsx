import React from "react";
import "./service.css";
import { Card, Container } from "react-bootstrap";
import support from "../../assets/images/support.png";
import user from "../../assets/images/user.png";
import veganfood from "../../assets/images/personal.png";
import orderfood from "../../assets/images/orderfood.png";
import consulting from "../../assets/images/consulting.png";
import delivery from "../../assets/images/delivery.png";
import "./service.css";
import { Element } from "react-scroll";
import { useTranslation } from "react-i18next";
var DataCards = [
  {
    name: "Influencers",
    role: "subscribe",
    type: "TextInfluencers" ,
    image: veganfood,
  },
  {
    name: "Offers",
    type: "TextOffers",
    role: "normal",
    image: user,
  },
  {
    name: "Withdrawal",
    type: "TextWithdrawal",
    image: delivery,
    role: "natural",
  },
  {
    name: "App",
    role: "orderfood",
    type: "TextApp",
    image: orderfood,
  },
  {
    name: "Customer_Service",
    role: "support",
    type: "TextCustomer_Service",
    image: support,
  },
  {
    name: "Consultation",
    role: "consulting",
    type: "TextConsultation",
    image: consulting,
  },
];
function Services() {
  const { t } = useTranslation();

  const getBadgeColor = (role) => {
    switch (role) {
      case "natural":
        return "red";
      case "subscribe":
        return "green";
      case "normal":
        return "#F4BB50";
      case "orderfood":
        return "#42C4A5";
      case "support":
        return "#84C504";
      case "consulting":
        return "#FF8E63";
      default:
        return "gray";
    }
  };

  return (
    <Element name="service">
      <div className="Services_title">
        <div className="secand__section">
          <p className="text__cinterP">
            {t("Our")} <span className="title__cinter"> {t("Hands")} </span>
          </p>
          <p className="p__P">{t("offer")}</p>

          <Container>
            <div className="all__card">
              {DataCards.map((DataCard) => (
                <Card
                  style={{
                    width: "14rem",
                    margin: "1rem ",
                    height:"12.5rem",
                    border: `2px solid ${getBadgeColor(DataCard.role)} `,
                  }}
                >
                  <Card.Body id="cards__body">
                    <Card.Img
                      variant="top"
                      style={{ width: "3rem", height: "3rem" }}
                      src={DataCard.image}
                    />
                    <Card.Title
                      style={{
                        color: `${getBadgeColor(DataCard.role)} `,
                        lineHeight: "2",
                      }}
                      id="title"
                    >
                    
                      {t(`${DataCard.name}`)}
                    </Card.Title>

                    <Card.Text id="text">   {t(`${DataCard.type}`)}</Card.Text>
                  </Card.Body>
                </Card>
              ))}
            </div>
          </Container>
        </div>

        <br />
      </div>
    </Element>
  );
}

export default Services;
