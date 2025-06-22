import React, { useContext } from "react";
import { themeContext } from "../../../context/themeContext";
import { useTranslation } from "react-i18next";
import i18n from "../../../utils/i18next";
import ToggleButton from "../../ToggleButton";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/images/Ellipse 33.png";
import en from "../../../assets/images/flag.png";
import ar from "../../../assets/images/ar.jpg";
import "../../Header/style.css";
function Header() {
  const [theme, setTheme] = useContext(themeContext);
  const { t } = useTranslation();
  const changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";
    localStorage.setItem("lang", newLang);
    i18n.changeLanguage(newLang);
  };
  const new_Langs = localStorage.getItem("lang");
  return (
    <div>
      <Navbar
        className={theme.theme === "light" ? "activeHeader" : "inactiveHeader"}
        collapseOnSelect
        expand="lg"
      >
        <Container>
          <Navbar.Brand href="/" className="logo logo_elemnts">
            <img src={logo} alt="logo" className="image_logo" />
            <div className="name_Elemnts">
              <span className="name_user">Mai Sami Jaber</span>
              <span className="name_user">email.com</span>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="navbar-pg">
              <NavLink
                exact
                smooth={true}
                duration={500}
                to="/admins/dashboard"
                className="nav-item  "
              >
                {t("Home")}
              </NavLink>
              <NavLink
                to="/admin/user"
                className="nav-item"
                smooth={true}
                duration={500}
              >
                المستخدمين
              </NavLink>
              <NavLink to="/admin/support-close" className="nav-item  ">
                الرسائل المغلقة
              </NavLink>
              <NavLink to="/admin/support-open" className="nav-item  ">
                الرسائل المفتوحة
              </NavLink>
              <NavLink to="/admin/promo" className="nav-item  ">
                Promo Code
              </NavLink>
            </Nav>
               <Nav className="btn-registration">
                        <Link to="/signIn">
                          <Button className="btn signIn" variant="success">
                           تسجيل الخروج
                          </Button>
                        </Link>
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
    </div>
  );
}

export default Header;
