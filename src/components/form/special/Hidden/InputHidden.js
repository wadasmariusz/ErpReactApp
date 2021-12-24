import React from 'react';
import {useFormContext} from "react-hook-form";

export const InputHidden = ({ name }) => {

  const { register } = useFormContext();

  return (
    <input type="hidden" {...register(name)} />
  );
};
