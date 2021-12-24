import React from 'react';
import {useBool} from "app/hooks/helpers/useBool";
import { Dropdown, DropdownToggle, DropdownMenu } from 'reactstrap';
import {ThreeDotsVertical} from "react-bootstrap-icons";

export const DropdownActions = ({ children }) => {
  const dropdown = useBool(false);
  return (
    <Dropdown isOpen={dropdown.state} toggle={dropdown.toggle} direction="down">
      <DropdownToggle tag="div">
        <div className="rounded-circle shadow-sm cursor-pointer p-25 btn btn-icon">
          <ThreeDotsVertical/>
        </div>
      </DropdownToggle>
      <DropdownMenu
        container="body"
        modifiers={{preventOverflow: {boundariesElement: 'window'}}}
      >
        {children}
      </DropdownMenu>
    </Dropdown>
  );
};
