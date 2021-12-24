import React from 'react';
import {FormGroup, Label} from "reactstrap";

export const InputTextareaPure = (
  {
    icon = null,
    className = '',
    label = '',
    placeholder: passedPlaceholder,
    required,
    disabled,
    onChange = ()=>{},
    onEnter  = ()=>{},
    invalid,
    innerRef,
    value='',
    inputClassName='',
    inputGroupClassName='',
    append,
    error,
    size = 'md',
    ...props
  }
) => {
  const placeholder = passedPlaceholder ?? `${label??''}${required?'*':''}`;

  const handleChange = (e) => {
    onChange(e.target.value);
  }

  const handleKeyDown = (e) => {
    if(e.key === 'Enter') {
      onEnter(e);
    }
  }

  return (
    <FormGroup className={`form-label-group position-relative mt-50 has-icon-left ${className}`}>
      <div className={`input-group ${inputGroupClassName}`}>
        <textarea
          className={`form-control ${inputClassName}`}
          placeholder={placeholder}
          disabled={disabled}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          ref={innerRef}
          value={value??''}
          {...props}
        />
        {append && (
          <div className="input-group-append">
            {append}
          </div>
        )}
      </div>
      <div className={`form-control-position ${size==='sm'?'form-control-position-sm':''}`}>
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
  );
};
