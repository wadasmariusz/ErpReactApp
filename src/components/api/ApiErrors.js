import React from 'react';
import {Alert} from "reactstrap";

const getErrorMsg = (error) => {

  if(!error) return null;

  if(typeof error === 'string') return error;

  if(error?.response?.data?.errors && error?.response?.data?.errors?.length) {
    return Object
      .keys(error?.response?.data?.errors)
      .map(key => error?.response?.data?.errors?.[key]?.message)
      ?.join(', ');
  }

  if(error?.response?.status) {
    switch(error?.response?.status) {
      case 404:
        return <span>Strona nie istnieje {'('}StatusCode: {error?.response?.status})</span>;
      case 403:
        return <span>Brak dostępu {'('}StatusCode: {error?.response?.status})</span>;
      default:
        return 'Wystąpił nieoczekiwany błąd';
    }
  }

  if(error?.response?.data?.message) return error?.response?.data?.message;
  // DEFAULT:
  return error?.toString();
}

export const ApiErrors = ({ error }) => {
  if(!error) return null;
  return (
    <Alert color="danger">
      {getErrorMsg(error)}
    </Alert>
  );
};
