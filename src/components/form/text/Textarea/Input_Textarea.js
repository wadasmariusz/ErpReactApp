import React from 'react';
import {Controller, useFormContext} from "react-hook-form";
import PropTypes from 'prop-types';
import {InputTextareaPure} from "components/form/text/Textarea/Input_Textarea.pure";

export const InputTextarea = (
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
          <InputTextareaPure
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

InputTextarea.propTypes = {
  name: PropTypes.string.isRequired,
}
