import useObjectState from "app/hooks/state/useObjectState";
import {useEffect, useRef} from "react";
import {useFakeSelector} from "app/hooks/@fakeDb/useFakeSelector";
import {selectFakeGroup} from "app/redux/@fakeDb/selectors/select_group";

const initialState = () => ({
  status: 'loading',
  error: null,
  isFetching: true,
  data: [],
  pagedData: {

  },
  page:     1,
  perPage: 10,
});

export const useFakePaginatedQuery = (
  groupName,
  config,
) => {

  const {
    delay = 500,
  } = config||{};

  const [
    {
      status,
      error,
      isFetching,
      data,
      pagedData,
      page,
      perPage,
    },
    setState
  ] = useObjectState(initialState());

  const storeData = useFakeSelector(selectFakeGroup(groupName));
  const dataRef   = useRef({});
  dataRef.current = {storeData, page, perPage};

  const refetch = () => {
    const data    = dataRef.current?.storeData;
    const page    = dataRef.current?.page;
    const perPage = dataRef.current?.perPage;
    if(page && perPage && data) {
      const keys = Object.keys(data);
      const from = (page-1) * perPage;
      const elems = keys.splice(from, perPage);
      setState({
        status: dataRef.current ? 'success' : 'error',
        isFetching: false,
        error: dataRef.current ? null : '404',
        data: elems.map(id=>({
          ...data[id],
          id,
        })),
      });
    }
  }

  const setPage = (page, perPage) => {
    if(page && perPage) {
      setState({
        page,
        perPage,
      });
    }
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if(delay!==-1) {
        refetch();
      }
    }, delay);
    return () => {
      clearTimeout(timer);
    }
  }, [page, perPage]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if(delay!==-1) {
        refetch();
      }
    }, delay);
    return () => {
      clearTimeout(timer);
    }
  }, []);

  return {
    status,
    error,
    isFetching,
    data,
    pagedData,
    refetch,
    setPage,
    page,
    perPage,
    isError: !!error,
  }

}
