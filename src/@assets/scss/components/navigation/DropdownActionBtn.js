import React from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import {Link} from "react-router-dom";

export const DropdownActionBtn = ({ children }) => {
  return (
    <UncontrolledDropdown>
      <DropdownToggle tag="div" className="cursor-pointer" caret>

      </DropdownToggle>
      <DropdownMenu right>
        {children}
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export const DropdownActionItem = ({ to, children, className='' }) => (
  <DropdownItem
    tag={Link}
    to={to}
    className="d-flex align-items-center"
  >
    {children}
  </DropdownItem>
)
