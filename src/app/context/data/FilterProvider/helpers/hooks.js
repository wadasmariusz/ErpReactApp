import {useContext, useEffect, useState} from "react";
import useAllLocationParams from "app/hooks/state/useAllLocationParams";
import {
  FILTER_MODE_COMBINED,
  FILTER_MODE_STATE,
  FILTER_MODE_URL_PARAMS,
  FilterAppliedContext,
  FilterContext,
  FilterFiltersContext
} from "app/context/data/FilterProvider/FilterProvider";
import {useHistory, useLocation} from "react-router-dom";
import {paramsToSearch} from "app/context/data/FilterProvider/helpers/stateManagement";
import qs from "qs";

export const useHookFltrValues = () => {
  const context = useContext(FilterFiltersContext);
  const params = useAllLocationParams();

  if(!context || context.mode===FILTER_MODE_URL_PARAMS) {
    return {
      ...params,
      ...context.cachedUrlParams,
    };
  } else if(context.mode===FILTER_MODE_STATE) {
    return context.params;
  } else if(context.mode===FILTER_MODE_COMBINED) {
    return {
      ...params,
      ...context.params,
      ...context.cachedUrlParams,
    }
  }
  return {};
}

export const useHookFltrCtx = (disableCheckContextExists = false) => {
  const context = useContext(FilterContext);

  if(!disableCheckContextExists && !context) {
    throw new Error('useFilterContext requires FilterContextProvider')
  }

  return {
    mode:       context.mode,
    setFilter:  context.setFilter,
    setFilters: context.setFilters,
    apply:      context.apply,
    clear:      context.clear,
  }
}

const setPager = (location, history) => (page, perPage) => {
  const urlParams = qs.parse(location.search, {ignoreQueryPrefix: true});
  const newParams = {
    ...urlParams,
    page,
    perPage,
  };
  history.replace({
    ...location,
    search: paramsToSearch(newParams),
  });
}
const getUrl = ({pathname, search}) => (page, perPage) => {
  const urlParams = qs.parse(search, {ignoreQueryPrefix: true});
  const newParams = {
    ...urlParams,
    page,
    perPage,
  };
  return `${pathname}${paramsToSearch(newParams)}`
}

export const useHookSetPager = () => {

  const context = useHookFltrCtx(true);

  const history = useHistory();
  const {key, ...location} = useLocation();

  return {
    setPager: context.setFilters ? (
      (page, perPage) => context.setFilters({page, perPage})
    ) : (
      setPager(location, history)
    ),
    getUrl: getUrl(location),
    mode: context.mode??FILTER_MODE_URL_PARAMS,
  };

}

export const useHookFltrValue = (name, config) => {
  const params = useHookFltrValues();
  const {setFilter} = useHookFltrCtx();

  const setState = (value) => {
    setFilter(name, value, config);
  }
  return [params[name]??config?.defaultValue, setState];
}

export const useHookCchFltrValue = (name, timeout=400, config) => {
  const params = useHookFltrValues();
  const {setFilter} = useHookFltrCtx();
  const [state, setState] = useState();
  const defaultValue = config?.defaultValue;

  useEffect(() => {
    if(state !== params[name]??config?.defaultValue) {
      setState(params[name]??config?.defaultValue);
    }
  }, [params[name]??config?.defaultValue]);

  useEffect(() => {
    const timer = setTimeout(()=>{
      setFilter(name, state, config);
    }, timeout);
    return () => clearTimeout(timer);
  }, [state])

  return [state??defaultValue, setState];
}

export const useHookFltrAppliedValues = () => {
  const context = useContext(FilterAppliedContext);
  const params = useAllLocationParams();

  if(!context || context.mode===FILTER_MODE_URL_PARAMS) {
    return params;
  } else if(context.mode===FILTER_MODE_STATE) {
    return context.params;
  } else if(context.mode===FILTER_MODE_COMBINED) {
    return {
      ...params,
      ...context.params,
    }
  }
  return {};
}
