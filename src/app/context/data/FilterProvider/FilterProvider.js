import React, {useEffect, useMemo, useRef, useState} from 'react';
import useAllLocationParams from "app/hooks/state/useAllLocationParams";
import useObjectState from "app/hooks/state/useObjectState";
import {useHistory, useLocation} from "react-router-dom";
import {paramsToSearch} from "app/context/data/FilterProvider/helpers/stateManagement";
//
//
export {useHookFltrCtx as useFiltersContext} from './helpers/hooks';
export {useHookFltrValues as useFilters} from './helpers/hooks';
export {useHookFltrAppliedValues as useAppliedFilters} from './helpers/hooks';
export {useHookFltrValue as useFilterValue} from './helpers/hooks';
export {useHookCchFltrValue as useCachedFilterValue} from './helpers/hooks';
export {hocWithFilters as withFilters} from './helpers/HoC';


export const FILTER_MODE_COMBINED = 'combined';
export const FILTER_MODE_URL_PARAMS = 'urlParams';
export const FILTER_MODE_STATE = 'state';
//
export const FilterContext = React.createContext({});
export const FilterFiltersContext = React.createContext({});
export const FilterAppliedContext = React.createContext({});


export const FilterProvider = ({filterMode = FILTER_MODE_COMBINED, children, applyMode = 'auto'}) => {

  // ? state-type getters & setters
  const [filters, _setFilters] = useObjectState({});
  const [appliedFilters, setAppliedFilters] = useState({});
  const [cachedUrlParams, setCachedUrlParams, forceSetCachedUrlParams] = useObjectState({});

  // ? location params
  const history = useHistory();
  const {key, ...location} = useLocation();
  const urlParams = useAllLocationParams();

  // ? pass Ref() into cached setters
  const refHelper = useRef({});
  refHelper.current = {
    urlParams,
    location,
    _setFilters,
    cachedUrlParams,
    filters,
  };

  // ? set single value of filters
  const setFilter = (name, value, {mode: _mode} = {}) => {

    // get state passed through Ref()
    const {urlParams, location, _setFilters} = refHelper.current;

    // replace url search...
    if (filterMode === FILTER_MODE_URL_PARAMS || _mode === FILTER_MODE_URL_PARAMS) {
      if (applyMode === 'manual') {
        setCachedUrlParams({[name]: value});
      } else {
        const newParams = {
          ...urlParams,
          [name]: value,
        };
        history.replace({
          ...location,
          search: paramsToSearch(newParams),
        });
      }
      // ...or set filters (state)
    } else {
      //
      _setFilters({
        [name]: value,
      });
      //
    }
  }

  // ? set multiple filters at once
  const setFilters = (newState, {mode: _mode} = {}) => {
    // get state passed through Ref()
    const {urlParams, location, _setFilters} = refHelper.current;

    // replace url search...
    if (filterMode === FILTER_MODE_URL_PARAMS || _mode === FILTER_MODE_URL_PARAMS) {
      if (applyMode === 'manual') {
        setCachedUrlParams(newState);
      } else {
        const newParams = {
          ...urlParams,
          ...newState,
        };
        history.replace({
          ...location,
          search: paramsToSearch(newParams),
        });
      }
      // ...or set filters (state)
    } else {
      _setFilters(newState);
    }
  }

  const apply = (_mode) => {
    if (applyMode === 'auto') {
      console.warn('You are using applyMode in auto mode. There\'s no need to use apply function');
    }
    const {urlParams, location, cachedUrlParams, filters} = refHelper.current;
    if (filterMode === FILTER_MODE_URL_PARAMS || _mode === FILTER_MODE_URL_PARAMS) {
      const newParams = {
        ...urlParams,
        ...cachedUrlParams,
      };
      history.replace({
        ...location,
        search: paramsToSearch(newParams),
      });
      forceSetCachedUrlParams({});
    }
    if (applyMode === 'manual') {
      setAppliedFilters(filters);
    }
  }

  const clear = () => {
    const {location} = refHelper.current;
    forceSetCachedUrlParams({});
    setAppliedFilters({});
    _setFilters({});
    history.replace({
      ...location,
      search: '',
    });
  }

  // prevent rerender when filters (state) change
  const ctx = useMemo(() => {
    return {
      setFilters,
      setFilter,
      apply,
      filterMode,
      applyMode,
      clear,
    }
  }, []);

  return (
    <FilterFiltersContext.Provider value={{params: filters, cachedUrlParams, mode: filterMode}}> {/* value provider */}
      <FilterContext.Provider value={ctx}> {/* context provider */}
        <FilterAppliedContext.Provider
          value={{params: applyMode === 'auto' ? filters : appliedFilters, mode: filterMode}}>
          {children}
        </FilterAppliedContext.Provider>
      </FilterContext.Provider>
    </FilterFiltersContext.Provider>
  );
};

function useTraceUpdate(props) {
  const prev = useRef(props);
  useEffect(() => {
    const changedProps = Object.entries(props).reduce((ps, [k, v]) => {
      if (prev.current[k] !== v) {
        ps[k] = [prev.current[k], v];
      }
      return ps;
    }, {});
    if (Object.keys(changedProps).length > 0) {
      console.log('Changed props:', changedProps);
    }
    prev.current = props;
  });
}
