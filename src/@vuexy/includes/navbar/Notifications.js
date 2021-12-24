import React, {useState} from 'react';
import {
  Dropdown,
  DropdownToggle,
} from "reactstrap";
import {Bell} from "react-bootstrap-icons";


export const Notifications = () => {

  const [ isOpenDropdown, setIsOpen ] = useState(false);

  const handleToggleIsOpenDropdown = () => setIsOpen(!isOpenDropdown);


  return (
    <>
      <Dropdown
        isOpen={isOpenDropdown}
        toggle={handleToggleIsOpenDropdown}
        tag="li"
        className="dropdown-notification nav-item"
      >
        <DropdownToggle tag="a" className="nav-link nav-link-label">
          <Bell size={21} />
        </DropdownToggle>
        {/*<DropdownMenu tag="ul" right className="dropdown-menu-media">*/}

        {/*</DropdownMenu>*/}
      </Dropdown>
    </>
  );
};
