import {useQuery} from "react-query";
import {useCreatePagination} from "app/hooks/crud/useCreatePagination";
import useObjectState from "app/hooks/state/useObjectState";
import useAllLocationParams from "app/hooks/state/useAllLocationParams";
import {useAppliedFilters} from "app/context/data/FilterProvider/FilterProvider";
import {useHookSetPager} from "app/context/data/FilterProvider/helpers/hooks";

export const PAGINATION_TYPE_URL = true;
export const PAGINATION_TYPE_STATE = false;

const initialState = (pageParam, resultsParam) => ({
  pageParam,
  resultsParam,
});

export const usePaginatedQuery2 = ({
                                     queryKey: _queryKey,
                                     queryFn,
                                     defaultPageSize = 10,
                                     defaultPage = 1,
                                     config,
                                     paginationType = PAGINATION_TYPE_URL,
                                     extractData = data => data?.items,
                                   }) => {
  const {page: _p, perPage: _pp, ...filters} = useAppliedFilters();
  const params = useAllLocationParams();
  const [{pageParam, resultsParam}, setState] = useObjectState(
    initialState(defaultPage, defaultPageSize),
  );

  const page =
    paginationType === PAGINATION_TYPE_URL
      ? params?.page || defaultPage
      : pageParam;
  const perPage =
    paginationType === PAGINATION_TYPE_URL
      ? params?.perPage || defaultPageSize
      : resultsParam;

  const [, ...queryKey] = _queryKey;

  const {
    data: queryData,
    error,
    isFetching,
    status,
    latestData,
    refetch,
    resolvedData,
    isError,
    isSuccess,
    isLoading,
    isIdle,
  } = useQuery(
    [_queryKey, page, perPage, filters],
    () => queryFn({page, perPage}, queryKey, filters),
    {
      ...config,
      keepPreviousData: true,
    },
  );

  const {setPager, mode, getUrl} = useHookSetPager();
  const data = extractData(queryData) || [];
  const pagination = useCreatePagination(queryData?.pagedData, {
    mode,
    setPager,
    getUrl,
  });

  const setPage = (page, perPage = null) => {
    setPager({page, perPage});
  };


  return {
    data,
    pagination,
    setPage,
    latestData,
    resolvedData,
    error,
    status,
    refetch,
    isError,
    isFetching,
    isSuccess,
    isLoading,
    isIdle,
  };
};
