import React from 'react';
import {useFormContext} from "react-hook-form";

export const HookFormError = () => {

  const {formState} = useFormContext();

  const {errors} = formState;

  return (
    errors?.__status ? (
      <div className="alert alert-danger">
        {errors?.__status?.message}
      </div>
    ) : (
      null
    )
  );
};
