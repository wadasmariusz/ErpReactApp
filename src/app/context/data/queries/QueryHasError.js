import React from 'react';
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const QueryHasError = ({children}) => {

  const {error} = useQueryContext();

  return (
    error ? (
      children
    ) : (
      null
    )
  );
};
