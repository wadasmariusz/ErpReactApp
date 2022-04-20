import useObjectState from "app/hooks/state/useObjectState";
import {useEffect, useState} from "react";
import qs from "qs";
import {useHistory, useLocation} from "react-router-dom";

const initialFilters = () => ({
  search: '',
  kind: null,
  category: null,
});

export const useSheetFilters = (withUrl = true) => {
  const [currentFilters, setCurrentFilters] = useState(initialFilters());
  const [nextFilters, setNextFilters] = useObjectState(initialFilters());
  const {search} = useLocation();
  const history = useHistory();
  const setSearch = (search) => setNextFilters({search});

  useEffect(() => {
    const params = qs.parse(search, {ignoreQueryPrefix: true});
    const newFilters = {
      search: params?.search ?? ''
    };
    setCurrentFilters(newFilters);
    setNextFilters(newFilters);
  }, []);

  const applyFilters = () => {
    if (!withUrl) {
      setCurrentFilters(nextFilters);
    } else {
      const params = qs.parse(search, {ignoreQueryPrefix: true});
      //console.log(params)
      const newParams = {
        ...params,
        ...nextFilters,//TODO: add more advanced functions
      }
      const newSearch = '?' + qs.stringify(newParams);
      history.push({search: newSearch});
      setCurrentFilters(newParams);
    }
  }

  return [
    currentFilters,
    nextFilters,
    {
      setFilters: setNextFilters,
      setSearch,
      applyFilters,
    }
  ];
}
