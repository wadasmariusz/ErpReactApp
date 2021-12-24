import React from 'react';
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const QueryIsFetching = ({ children }) => {

  const {isFetching} = useQueryContext();

  return (
    isFetching ? (
      children
    ) : (
      null
    )
  );
};
