import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
import Sticky from "react-sticky-fill";
import LanguageSwitcher from "components/includes/LanguageSwitcher";
import { useAuth } from "app/hooks/auth/useAuth";
import { route } from "app/router/urls/routes";
import logo from "@assets/img/logo/logo-black.png";
import "../../../@assets/landing/css/style.css";
const Item = ({ text, route, className }) => (
  <NavItem>
    <NavLink
      tag={Link}
      to={route}
      className={`btn p-1 font-weight-bold ${className}`}
    >
      {text}
    </NavLink>
  </NavItem>
);

Item.propTypes = {
  text: PropTypes.string,
  route: PropTypes.string,
  className: PropTypes.string,
};

const PublicNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="main-header landing-page">
      <div className="container">
        <a href="/">
          <img className="main-header--logo" src={logo} alt="Logo" />
        </a>
        <nav className={`main-nav ${isOpen ? "active" : ""} pt-2`} id="main-nav">
          <ul>
            <li>
              <Link className="nav-link" to={route["public.units"]}>
                Jednostki
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={route["public.events"]}>
                Wydarzenia
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={route["public.lost"]}>
                Gołębie zgubione
              </Link>
            </li>
            <li>
              <Link className="nav-link" to={route["public.marketplace"]}>
                Marketplace
              </Link>
            </li>
            {isLoggedIn() ? (
              <li>
                <Link className="nav-link button-1 button-semibold" to={route["app.dashboard"]}>
                  Panel
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link
                    className="nav-link button-1 mx-25 button-semibold"
                    to={route["auth.login"]}
                  >
                    Zaloguj
                  </Link>
                </li>
                <li>
                  {/*<Link*/}
                  {/*  className="nav-link button-1 mx-25 button-semibold"*/}
                  {/*  to={route["auth.register"]}*/}
                  {/*>*/}
                  {/*  Zarejestruj*/}
                  {/*</Link>*/}
                </li>
              </>
            )}
          </ul>
        </nav>
        <button className="mobile-menu-button" type="button" onClick={toggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default PublicNavbar;
