import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import {InputTextPure} from "components/form/text/Text/Input_Text.pure";
import PropTypes from 'prop-types';
import {InputDatepickerPure} from "components/form/special/Datepicker/Input_Datepicker.pure";

export const InputDatePicker = (
  {
    name,
    placeholder,
    label,
    ...props
}) => {

  const {control} = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={(
        {
          field:{ref, ...field},
          fieldState
        },
      ) => {
        const {error} = fieldState;
        return (
          <InputDatepickerPure
            placeholder={placeholder}
            label={label}
            error={error}
            innerRef={ref}
            {...props}
            {...field}
          />
        )
      }}
    />
  );
};

InputDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
}
