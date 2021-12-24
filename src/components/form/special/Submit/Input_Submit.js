import React from 'react';
import {Button, Spinner} from "reactstrap";
import {useFormContext} from "react-hook-form";

export const InputSubmit = ({ icon=null, value='Zapisz', ...props }) => {

  const { formState } = useFormContext();

  const {isSubmitting} = formState;
  // console.log(isSubmitting)

  return (
    <Button type="submit" color="success" disabled={isSubmitting} {...props}>
      {isSubmitting ? (
        <Spinner color='white' size='sm' />
      ) : (
        icon
      )}
      {value}
    </Button>
  );
};
