import React from "react";
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem as DropdownItemBootstrap,
  DropdownToggle,
} from "reactstrap";
import { FlagIcon } from "components/FlagIcon";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { Notifications } from "@vuexy/includes/navbar/Notifications";
import { Chats } from "@vuexy/includes/navbar/Chats";
import { changeMode } from "app/redux/@vuexy/actiontypes/customizer";
import { DropdownActionItem } from "@assets/scss/components/navigation/DropdownActionBtn";
import { route } from "app/router/urls/routes";
import { BoxArrowLeft, Moon, Sun } from "react-bootstrap-icons";
import { SIZE_INPUT_ICON } from "app/config/sizes";

const UserDropdown = () => {
  return (
    <DropdownMenu right>
      <DropdownActionItem to={route["auth.logout"]}>
        <BoxArrowLeft size={SIZE_INPUT_ICON} className="mr-50" />{" "}
        <span>Wyloguj</span>
      </DropdownActionItem>
    </DropdownMenu>
  );
};

const languages = {
  gb: "EN",
  pl: "PL",
};

export const NavbarUser = ({ className = "", ...props }) => {
  const { i18n } = useTranslation();
  const theme = useSelector(({ customizer }) => customizer?.theme);
  const dispatch = useDispatch();
  const toggleTheme = () => {
    dispatch(changeMode(theme === "dark" ? "semi-dark" : "dark"));
  };

  const {
    userName = null,
    profilePhotoUrl,
    email,
  } = useSelector(({ auth }) => auth?.user ?? {});
  return (
    <ul
      className={`nav navbar-nav navbar-nav-user float-right d-flex align-items-center ${className}`}
    >
      <li className="nav-item">
        <div className="nav-link cursor-pointer" onClick={toggleTheme}>
          {theme === "dark" ? <Sun /> : <Moon />}
        </div>
      </li>
      <UncontrolledDropdown
        tag="li"
        className="dropdown-language nav-item"
        data-tour="language"
      >
        <DropdownToggle tag="a" className="nav-link">
          <FlagIcon code={i18n?.language ?? "eu"} />
        </DropdownToggle>
        <DropdownMenu right>
          {Object.keys(languages)
            .filter((key) => key !== i18n?.language)
            .map((lang) => (
              <DropdownItemBootstrap
                className="w-100"
                key={lang}
                onClick={() => i18n?.changeLanguage(lang)}
              >
                <FlagIcon code={lang} />
                <span className="ml-1">{languages[lang]}</span>
              </DropdownItemBootstrap>
            ))}
        </DropdownMenu>
      </UncontrolledDropdown>
      <Notifications />
      <Chats />
      {/*<NavItem>*/}
      {/*  <NavLink className="nav-link-label position-relative" tag={Link} to={route['pc.conversations']}>*/}
      {/*    <Icon.Mail size={21} />*/}
      {/*    {!!conversations?.unreadCount && (*/}
      {/*      <Badge pill color="primary" className="badge-up">*/}
      {/*        {` ${conversations.unreadCount} `}*/}
      {/*      </Badge>*/}
      {/*    )}*/}
      {/*  </NavLink>*/}
      {/*</NavItem>*/}
      <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
        <DropdownToggle tag="a" className="nav-link dropdown-user-link">
          <div className="user-nav d-sm-flex d-none">
            <span className="user-name text-bold-600">{userName}</span>
            {email && <span className="user-name text-muted">{email}</span>}
            {/*<span className="user-status">Available</span>*/}
          </div>
          <span data-tour="user">
            <img
              src={
                profilePhotoUrl ??
                "https://api.sydig.com/images/default/shipper.png"
              }
              className="round"
              height="40"
              width="40"
              alt="U"
            />
          </span>
        </DropdownToggle>
        <UserDropdown {...props} />
      </UncontrolledDropdown>
    </ul>
  );
};
export default NavbarUser;
