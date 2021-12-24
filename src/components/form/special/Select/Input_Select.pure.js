import React from 'react';
import {FormGroup, Label} from "reactstrap";
import Select from "react-select";
import classnames from "classnames";
import {customStyles, findOption} from "app/utility/form/select";
import {reactSelectTheme} from "app/utility/reactSelectTheme";
import {useSelector} from "react-redux";

export const InputSelectPure = ({
  icon,
  label,
  placeholder:passedPlaceholder,
  required,
  value,
  onChange,
  innerRef,
  disabled,
  optionFormat,
  name,
  options,
  error,
  className='',
  ...props
}) => {

  const placeholder = `${passedPlaceholder??label??''}${required?'*':''}`;
  const theme = useSelector(({customizer:c})=>c?.customizer?.theme);

  return (
    <FormGroup
      className={
        classnames(className,{
          'form-label-group mt-50 position-relative has-icon-left': true,
          'force-input-has-value': !!value || value===0,
        })
      }
    >
      <Select
        styles={customStyles()}
        value={value===null?null:findOption(value?.toString(), options)}
        // value={value}
        options={options}
        formatOptionLabel={optionFormat}
        placeholder={placeholder}
        onChange={onChange}
        isDisabled={disabled}
        // menuIsOpen
        isClearable
        {...props}
        theme={reactSelectTheme(theme)}
        classNamePrefix="react-select"
      />
      <div className="form-control-position">
        {icon}
      </div>
      <Label>
        {label}
        {required && <span className="text-danger">*</span>}
      </Label>
      {error && (
        <div className="small text-danger">
          {error?.message}
        </div>
      )}
      <input
        type="hidden"
        name={name}
        ref={innerRef}
      />
    </FormGroup>
  );
};
