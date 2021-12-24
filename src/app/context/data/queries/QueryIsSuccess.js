import React from 'react';
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const QueryIsSuccess = ({children}) => {

  const {status} = useQueryContext();

  return (
    status==='success' ? (
      children
    ) : (
      null
    )
  );
};
