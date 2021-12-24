import React from "react"
import {useFormContext} from "react-hook-form";
// import {FormHelper_ErrorMessage} from "components/form/FormHelper_ErrorMessage";

const CheckBoxesVuexy = ({
  className = '',
  color = 'primary',
  icon,
  size = 'md',
  label = '',
  defaultChecked,
  checked,
  value,
  disabled,
  onClick = null,
  onChange = null,
  name,
}) => {

  const methods = useFormContext();

  return (
    <div>
      <div
        className={`vx-checkbox-con ${className} vx-checkbox-${color} d-flex`}
      >
        {methods ? (
          <>
            <input
              type="checkbox"
              name={name}
              ref={methods.register}
            />
          </>
        ) : (
          <input
            type="checkbox"
            name={name}
            defaultChecked={defaultChecked}
            checked={checked}
            value={value}
            disabled={disabled}
            onClick={onClick}
            onChange={onChange}
          />
        )}
        <span className={`vx-checkbox vx-checkbox-${size} mr-0 text-white flex-grow-1`} style={{minWidth:'20px'}}>
          <span className="vx-checkbox--check">{icon}</span>
        </span>
        {label && <span className="pl-25 flex-grow-0">{label}</span>}
      </div>
      {/*{methods && <FormHelper_ErrorMessage errors={methods.errors} name={name} />}*/}
    </div>
  )
}

export default CheckBoxesVuexy
