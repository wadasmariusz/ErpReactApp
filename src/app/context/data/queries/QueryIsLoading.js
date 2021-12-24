import React from 'react';
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const QueryIsLoading = ({ children, acceptIsFetching }) => {

  const {isLoading, isFetching} = useQueryContext();

  return (
    isLoading || (acceptIsFetching && isFetching) ? (
      children
    ) : (
      null
    )
  );
};
