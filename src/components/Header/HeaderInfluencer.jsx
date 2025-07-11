import React, { useContext } from "react";
import "./style.css";
import ToggleButton from "../ToggleButton";
import i18n from "../../utils/i18next";
import { Button, Navbar, Container } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import logo from "../../assets/images/intro.jpg";
import { Link } from "react-scroll";
import en from "../../assets/images/flag.png";
import ar from "../../assets/images/ar.jpg";
import { useTranslation } from "react-i18next";
import { themeContext } from "../../context/themeContext";
import { NavLink } from "react-router-dom";

function HeaderItem() {
  const [theme, setTheme] = useContext(themeContext);

  const { t } = useTranslation();

  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    localStorage.setItem("lang", newLang);
    i18n.changeLanguage(newLang);
  };

  const new_Langs = localStorage.getItem("lang");
  return (
    <Navbar
      className={theme.theme === "light" ? "activeHeader" : "inactiveHeader"}
      collapseOnSelect
      expand="lg"
    >
      <Container>
        <Navbar.Brand href="/influenser/dahsboard" className="logo">
          <img src={logo} alt="logo" className="image_logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-pg">
            <NavLink
              smooth={true}
              duration={500}
              activeClassName="join-now"
              className="nav-item"
              to="/influenser/dahsboard"
            >
              {t("Home")}
            </NavLink>
            <Link
              to="about"
              activeClassName="join-now"
              className="nav-item"
              smooth={true}
              duration={500}
            >
              عمليات السحب
            </Link>
            <Link
              to="about"
              activeClassName="join-now"
              className="nav-item"
              smooth={true}
              duration={500}
            >
              عمليات السحب
            </Link>
            <Link
              to="customer"
              activeClassName="join-now"
              className="nav-item  "
            >
              {t("Customers")}
            </Link>
          </Nav>

          <Nav className="btn-registration">
            <NavLink to="/logout">
              <Button className="btn signIn" variant="success">
                تسجيل خروج
              </Button>
            </NavLink>
          </Nav>
          <Nav className="btn-registration">
            <button onClick={changeLanguage} className=" lang">
              {new_Langs === "en" ? (
                <img className="en_image" src={ar} alt="English" />
              ) : (
                <img className="en_image" src={en} alt="English" />
              )}
            </button>
            <ToggleButton />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { HeaderItem };

class HeaderInfluencer extends React.Component {
  changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";

    localStorage.setItem("lang", newLang);
    i18n.changeLanguage(newLang);
  };

  render() {
    const new_Langs = localStorage.getItem("lang");
    return <HeaderItem />;
  }
}

export default HeaderInfluencer;
