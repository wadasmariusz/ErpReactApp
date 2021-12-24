import React from "react"
import {
  NavItem,
  NavLink,
} from "reactstrap"
import {List} from "react-bootstrap-icons";

const NavbarBookmarks = ({sidebarVisibility}) =>  {
  return (
    <div className="mr-auto float-left bookmark-wrapper d-flex align-items-center">
      <ul className="navbar-nav d-xl-none">
        <NavItem className="mobile-menu mr-auto">
          <NavLink
            className="nav-menu-main menu-toggle hidden-xs is-active"
            onClick={sidebarVisibility}>
            <List className="ficon" />
          </NavLink>
        </NavItem>
      </ul>
    </div>
  )
}

export default NavbarBookmarks;
