import React, { useState } from "react";
import {
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Dropdown,
} from "reactstrap";
import styled from "styled-components";

const LANGUAGES = [
  {
    flagCode: "pl",
    id: "pl",
    name: "Polski",
  },
  {
    flagCode: "gb",
    id: "en",
    name: "English",
  },
];

const SwitcherFlag = styled.span`
  height: 1.2em;
  width: 1.6em;
  background-size: cover !important;
  box-shadow: #0004 0 0 0.2em 0px;
`;

const LanguageSwitcher = ({ className }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [{ id: languageId, flagCode }, setLanguage] = useState({ id: "pl", flagCode: "pl" }); // temporary mock logic, delete later
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle} className={className}>
      <DropdownToggle color="link" className="px-1">
        <SwitcherFlag className={`flag-icon flag-icon-${flagCode}`} />
      </DropdownToggle>
      <DropdownMenu right>
        {LANGUAGES.map(({ id, name, flagCode }) => (
          <DropdownItem
            key={id}
            disabled={id === languageId}
            onClick={() => setLanguage({ id, flagCode })}
            className={`w-100 ${id === languageId ? 'text-primary font-weight-bold' : ''}`}
          >
            <span className={`flag-icon flag-icon-${flagCode} mr-1`} />
            {name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default LanguageSwitcher;
