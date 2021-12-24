import React from "react";
import {FILTER_MODE_URL_PARAMS, FilterProvider} from "app/context/data/FilterProvider/FilterProvider";

export const hocWithFilters = (Component, {mode= null, applyMode= null} = {}) => {
  return function w(props) {
    return (
      <FilterProvider filterMode={mode||FILTER_MODE_URL_PARAMS} applyMode={applyMode}>
        <Component {...props} />
      </FilterProvider>
    )
  }
}
