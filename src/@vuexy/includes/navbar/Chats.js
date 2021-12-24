// import {useSelector} from "react-redux";
import React, {useState} from "react";
import {/*Badge,*/ Dropdown, /*DropdownItem as DropdownItemBootstrap,*/ DropdownMenu, DropdownToggle} from "reactstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import {Envelope} from "react-bootstrap-icons";
// import {Link} from "react-router-dom";
// import {route} from "app/router/urls/routes";

export const Chats = () => {

  // const { conversations } = useSelector(({notification}) => notification);
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
          <Envelope size={21} />
          {/*{!!conversations?.unreadCount && (*/}
          {/*  <Badge pill color="primary" className="badge-up">*/}
          {/*    {` ${conversations.unreadCount} `}*/}
          {/*  </Badge>*/}
          {/*)}*/}
        </DropdownToggle>
        <DropdownMenu tag="ul" right className="dropdown-menu-media">
          <>
            <li className="dropdown-menu-header">
              <div className="dropdown-header mt-0">
                <span className="notification-title">Wiadomości</span>
              </div>
            </li>
            <PerfectScrollbar
              className="media-list overflow-hidden position-relative pt-50 pb-75"
              options={{
                wheelPropagation: false
              }}
            >
              (TODO)
            </PerfectScrollbar>
            <li className="dropdown-menu-footer">
              {/*<DropdownItemBootstrap tag={Link} to={route['pc.conversations']} className="p-1 text-center">*/}
              {/*  <span className="align-middle">Zobacz wszystkie</span>*/}
              {/*</DropdownItemBootstrap>*/}
            </li>
          </>
        </DropdownMenu>
      </Dropdown>
    </>
  );
};
