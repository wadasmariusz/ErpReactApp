import React from "react";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import logoIcon from "@assets/img/logo/logo-icon.png";
import { Circle, Disc, X } from "react-bootstrap-icons";
import { useSelectUser } from "app/redux/auth/selectors/selectUser";

const SidebarHeader = (props) => {
  let {
    toggleSidebarMenu,
    activeTheme,
    collapsed,
    toggle,
    sidebarVisibility,
    menuShadow,
  } = props;

  const user = useSelectUser();

  return (
    <div className="navbar-header">
      <ul className="nav navbar-nav flex-row">
        <li className="nav-item mr-auto">
          <NavLink to="/" className="navbar-brand">
            {user?.companyLogoUrl ? (
              <div className="logo">
                <img src={user?.companyLogoUrl} alt="" />
              </div>
            ) : (
              <>
                <div className="logo">
                  <img style={{ maxWidth: "100%" }} src={logoIcon} alt="" />
                </div>
              </>
            )}
          </NavLink>
        </li>
        <li className="nav-item nav-toggle">
          <div className="nav-link modern-nav-toggle">
            {collapsed === false ? (
              <Disc
                onClick={() => {
                  toggleSidebarMenu(true);
                  toggle();
                }}
                className={classnames(
                  "toggle-icon icon-x d-none d-xl-block font-medium-4",
                  {
                    "text-primary": activeTheme === "primary",
                    "text-success": activeTheme === "success",
                    "text-danger": activeTheme === "danger",
                    "text-info": activeTheme === "info",
                    "text-warning": activeTheme === "warning",
                    "text-dark": activeTheme === "dark",
                  },
                )}
                size={20}
                data-tour="toggle-icon"
              />
            ) : (
              <Circle
                onClick={() => {
                  toggleSidebarMenu(false);
                  toggle();
                }}
                className={classnames(
                  "toggle-icon icon-x d-none d-xl-block font-medium-4",
                  {
                    "text-primary": activeTheme === "primary",
                    "text-success": activeTheme === "success",
                    "text-danger": activeTheme === "danger",
                    "text-info": activeTheme === "info",
                    "text-warning": activeTheme === "warning",
                    "text-dark": activeTheme === "dark",
                  },
                )}
                size={20}
              />
            )}
            <X
              onClick={sidebarVisibility}
              className={classnames(
                "toggle-icon icon-x d-block d-xl-none font-medium-4",
                {
                  "text-primary": activeTheme === "primary",
                  "text-success": activeTheme === "success",
                  "text-danger": activeTheme === "danger",
                  "text-info": activeTheme === "info",
                  "text-warning": activeTheme === "warning",
                  "text-dark": activeTheme === "dark",
                },
              )}
              size={20}
            />
          </div>
        </li>
      </ul>
      <div
        className={classnames("shadow-bottom", {
          "d-none": menuShadow === false,
        })}
      />
    </div>
  );
};

export default SidebarHeader;
