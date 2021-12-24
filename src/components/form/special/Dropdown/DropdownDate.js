import React from 'react';
import {Dropdown, DropdownMenu, DropdownToggle, UncontrolledTooltip} from "reactstrap";
import {InputDatepickerPure} from "components/form/special/Datepicker/Input_Datepicker.pure";

export const DropdownDate = (
  {
    id,
    outerTag = 'div',
    toggleTag = 'div',
    className,
    outerClassName,
    dropdownClassName,
    tooltip,
    onChange = ()=>{},
    placeholder = 'Wybierz datę...',
    children,
    positionFixed,
    value,
    dropdown,
  }
) => {


  const handleChange = (a) => {
    onChange(a);
    dropdown.open();
  }

  return (
    <Dropdown
      toggle={dropdown.toggle}
      isOpen={dropdown.isOpen}
      nav
      tag={outerTag}
      className={outerClassName}
      direction="down"
    >
      <DropdownToggle
        tag={toggleTag}
        className={dropdownClassName}
        id={'tooltip-'+id??0}
      >
        {children}
      </DropdownToggle>
      {tooltip && (
        <UncontrolledTooltip
          placement="top"
          target={'tooltip-'+id}
          trigger="hover"
        >
          {tooltip}
        </UncontrolledTooltip>
      )}
      <DropdownMenu
        className="p-0 border-0"
        positionFixed={positionFixed}
        container="body"
      >
        <div className="mt-n50" style={{minWidth: '15em', width: '100%'}}>
          {dropdown.isOpen && (
            <InputDatepickerPure
              value={value}
              onChange={handleChange}
              placeholder={placeholder}
              open
              label="Data"
              onEnter={handleChange}
              className="m-0"
            />
          )}
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};
