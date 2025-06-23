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
        <Navbar.Brand href="/" className="logo">
          <img src={logo} alt="logo" className="image_logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="navbar-pg">
            <Link
              exact
              smooth={true}
              duration={500}
              to="/"
              activeClassName="join-now"
              className="nav-item  "
            >
              {t("Home")}
            </Link>
            <Link
              to="about"
              activeClassName="join-now"
              className="nav-item"
              smooth={true}
              duration={500}
            >
              {t("about")}
            </Link>
            <Link
              to="service"
              activeClassName="join-now"
              className="nav-item  "
            >
              {t("Servises")}
            </Link>
            <Link
              to="comuncation"
              activeClassName="join-now"
              className="nav-item  "
            >
              {t("Contact Us")}
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
            <Link to="/login">
              <Button className="btn signIn" variant="success">
                {t("Login")}
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
  );
}

export { HeaderItem };

class Header extends React.Component {
  changeLanguage = () => {
    const newLang = i18n.language === "en" ? "ar" : "en";

    localStorage.setItem("lang", newLang);
    i18n.changeLanguage(newLang);
  };

  render() {
    const new_Langs = localStorage.getItem("lang");
    console.log(new_Langs);
    return (
      <HeaderItem />
      // <ul>
      //     <li>
      //       <NavLink to="/">الصفحة الرئيسية</NavLink>
      //     </li>

      //     <li>
      //       <NavLink to="/gifs">تواصل معنا</NavLink>
      //     </li>

      //     <li>
      //       <NavLink to="/counters">من نحن</NavLink>
      //     </li>

      //     <li>
      //       <NavLink to="/posts">خدماتنا</NavLink>
      //     </li>

      //     <li>
      //       <NavLink to="/slider">slider</NavLink>
      //     </li>

      //     <li>
      //       <NavLink to="/todos">todos</NavLink>
      //     </li>

      //     <li>
      //       <NavLink to="/todo">todo</NavLink>
      //     </li>
      //     <ToggleButton />
      //     <div>
      //       <button onClick={this.changeLanguage}>عربي</button>
      //     </div>
      //     <Nav className="btn-registration">
      //       <Link to="/signUp">
      //         <Button className="btn signUp" variant="link">
      //           مستخدم جديد
      //         </Button>
      //       </Link>
      //       <Link to="/signIn">
      //         <Button className="btn signIn" variant="success">
      //           تسجيل دخول
      //         </Button>
      //       </Link>
      //     </Nav>
      //   </ul>
    );
  }
}

export default Header;
