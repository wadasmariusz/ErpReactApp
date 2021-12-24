import React from 'react';
import {ApiErrors} from "components/api/ApiErrors";
import {useQueryContext} from "app/context/data/queries/QueryProvider";

export const QueryErrorsDefault = () => {

  const {error} = useQueryContext();

  return (
    <ApiErrors error={error}/>
  );
};
