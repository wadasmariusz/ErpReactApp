import React from 'react';

export const InputCheckboxPure = (
  {
    name,
    value,
    error,
    label,
    subLabel,
    onChange = () => {},
    innerRef,
    ...props
  }
) => {

  const handleChange = (e) => {
    return onChange({target: {value: e.target.checked}});
  }

  return (
    <div>
      <label className="custom-control-primary custom-checkbox custom-control align-items-center d-flex cursor-pointer">
        <input
          name={name}
          ref={innerRef}
          type="checkbox"
          className="custom-control-input"
          checked={!!value}
          onChange={handleChange}
        />
        <div className="custom-control-label">
          <div>
            {label}
          </div>
          <div className="text-muted small">{subLabel}</div>
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
