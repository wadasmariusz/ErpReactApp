import React, {forwardRef, useEffect, useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";
import {FormGroup, Label} from "reactstrap";
import {Calendar} from "react-bootstrap-icons";
import {SIZE_INPUT_ICON} from "app/config/sizes";

export const InputDatepickerPure = (
  {
    icon = <Calendar size={SIZE_INPUT_ICON}/>,
    label = '',
    placeholder: passedPlaceholder,
    required,
    onChange = ()=>{},
    onEnter  = ()=>{},
    invalid,
    innerRef,
    value='',
    disabled,
    open,
    ...props
  }
) => {

  const [date, setDate] = useState(new Date());
  const placeholder = passedPlaceholder ?? `${label??''}${required?'*':''}`;

  useEffect(() => {
    if(value && moment(value).isValid()) {
      setDate(moment(value).toDate());
    } else {
      setDate(null);
    }
  }, [value]);

  const handleDateChange = (newDate) => {
    console.log(newDate)
    // setDate(newDate)
    if(moment(newDate).isValid()) {
      onChange(moment(newDate).toISOString(true));
    }
  }

  return (
    <DatePicker
      selected={date}
      onChange={handleDateChange}
      placeholderText={placeholder}
      disabled={disabled}
      required={required}
      wrapperClassName="w-100"
      popperClassName="zindex-4"
      open={open}
      customInput={
        <DatePickerInput
          label={label}
          icon={icon}
          {...props}
        />
      }
    />
  );
}

const DatePickerInput = forwardRef(
  ({ value, onClick, icon, required, error, label, disabled, className='', ...props }, ref) => {
    return (
      <FormGroup className={`form-label-group position-relative mt-50 has-icon-left ${className}`} onClick={onClick}>
        <input
          className="form-control"
          disabled={disabled}
          value={value}
          ref={ref}
          {...props}
        />
        <div className="form-control-position">
          {icon}
        </div>
        <Label>
          {label}
          {required && (
            <span className="text-danger">*</span>
          )}
        </Label>
        {error && (
          <div className="small text-danger">
            {error?.message}
          </div>
        )}
      </FormGroup>
    )
  }
);
