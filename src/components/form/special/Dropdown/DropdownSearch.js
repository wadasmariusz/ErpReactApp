import React from 'react';
import {Dropdown, DropdownMenu, DropdownToggle, UncontrolledTooltip} from "reactstrap";
import Select from "react-select";

export const DropdownSearch = (
  {
    id,
    outerTag = 'div',
    toggleTag = 'div',
    className,
    outerClassName,
    dropdownClassName,
    tooltip,
    isSearchable = true,
    options = [],
    notFoundText = 'Nie znaleziono',
    onChange = () => {
    },
    placeholder = 'Wyszukaj...',
    isMulti,
    children,
    direction,
    positionFixed,
    dropdown,
    ...props
  }
) => {


  const handleChange = (a) => {
    dropdown.open();
    onChange(a);
  }

  return (
    <Dropdown
      isOpen={dropdown.isOpen}
      toggle={dropdown.toggle}
      nav
      tag={outerTag}
      className={outerClassName}
      direction="down"
    >
      <DropdownToggle
        tag={toggleTag}
        className={dropdownClassName}
        id={'tooltip-' + id ?? 0}
      >
        {children}
      </DropdownToggle>
      {tooltip && (
        <UncontrolledTooltip
          placement="top"
          target={'tooltip-' + id}
          trigger="hover"
        >
          {tooltip}
        </UncontrolledTooltip>
      )}
      <DropdownMenu
        className="p-0"
        positionFixed={positionFixed}
        container="body"
      >
        <div style={{minWidth: '25em', width: '100%'}}>
          <Select
            formatOptionLabel={SelectOptionWithSubtitle}
            menuIsOpen
            controlShouldRenderValue={false}
            isClearable={false}
            backspaceRemovesValue={false}
            // components={(isMulti || showSelected) && { Option: SelectCheckboxOption }}
            styles={{
              dropdownIndicator: () => ({display: 'none'}),
              menu: (provided) => ({...provided, position: 'static', margin: 0}),
              control: (provided) => isSearchable ? provided : {display: 'none'},
              indicatorSeparator: () => ({display: 'none'})
            }}
            hideSelectedOptions={false}
            className="select-search"
            classNamePrefix="select-search"
            noOptionsMessage={() => notFoundText}
            onChange={handleChange}
            options={options}
            placeholder={placeholder}
            autoFocus
            isMulti={isMulti}
            {...props}
          />
        </div>
      </DropdownMenu>
    </Dropdown>
  );
};

const SelectCheckboxOption = ({innerRef, innerProps, data, ...props}) => (
  <label ref={innerRef} {...innerProps}
         className="d-flex align-items-center w-100 py-2 px-4 cursor-pointer bg-hover-gray-200">
    {props.isMulti && (
      <i
        className={`fas fa-${props.isSelected ? "check-square" : "square"} mr-4 fa-lg text-${props.isSelected ? "primary" : "secondary"}`}
      />
    )}
    {!props.isMulti && (
      <i
        className={`fas fa-${props.isSelected ? "dot-circle" : "circle"} mr-4 fa-lg text-${props.isSelected ? "primary" : "secondary"}`}
      />
    )}
    <SelectOptionWithSubtitle {...data} />
  </label>
);

const SelectOptionWithSubtitle = ({imageUrl, label, sublabel, children, icon}) => (
  <div className="d-flex align-items-center cursor-pointer">
    {/*{imageUrl && <SymbolImage*/}
    {/*  isCircle*/}
    {/*  src={imageUrl}*/}
    {/*  maxWidth={30}*/}
    {/*/>}*/}
    {icon}
    <div className="d-flex flex-column ml-3 flex-grow-1">
      <b>{label}</b>
      <small className="text-muted">{sublabel}</small>
    </div>
    {children}
  </div>
)
