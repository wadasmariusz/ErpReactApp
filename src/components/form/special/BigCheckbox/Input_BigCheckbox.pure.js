import React from 'react';
import classnames from "classnames";

export const InputBigCheckboxPure = (
  {
    name,
    value,
    error,
    label,
    onChange = () => {},
    innerRef,
    ...props
  }
) => {

  const handleChange = (e) => {
    return onChange(e.target.checked);
  }

  return (
    <div>
      <label className={classnames("form-control form-label-group mt-50 cursor-pointer", {'border-primary':!!value})}>
        <div className="d-flex align-items-center h-100">
          <div className="custom-control-primary custom-checkbox custom-control align-items-center d-flex cursor-pointer">
            <input
              name={name}
              ref={innerRef}
              type="checkbox"
              aria-invalid="false"
              className="custom-control-input"
              checked={!!value}
              onChange={handleChange}
            />
            <span className={classnames("custom-control-label", {'text-primary':!!value})}>
              {label}
            </span>
          </div>
        </div>
      </label>
      {error && (
        <div className="small text-danger">
          {error?.message}
        </div>
      )}
    </div>
  );
};
