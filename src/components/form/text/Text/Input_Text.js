import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import {InputTextPure} from "components/form/text/Text/Input_Text.pure";
import PropTypes from 'prop-types';

export const InputText = (
  {
    name,
    placeholder,
    label,
    ...props
  }
) => {

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
          <InputTextPure
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

InputText.propTypes = {
  name: PropTypes.string.isRequired,
}
