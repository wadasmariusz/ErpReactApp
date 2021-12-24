import useObjectState from "app/hooks/state/useObjectState";
import {selectFakeElement} from "app/redux/@fakeDb/selectors/select_element";
import {useEffect, useRef} from "react";
import {useFakeSelector} from "app/hooks/@fakeDb/useFakeSelector";

const initialState = () => ({
  status: 'loading',
  error: null,
  isFetching: true,
  data: null,
});

export const useFakeQuery = (
  groupName,
  elementName,
  config,
) => {

  const {
    delay = 700,
  } = config || {};

  const [
    {
      status,
      error,
      isFetching,
      data,
    },
    setState
  ] = useObjectState(initialState());

  const storeData = useFakeSelector(selectFakeElement(groupName, elementName));
  const dataRef = useRef({});
  dataRef.current = storeData;

  const refetch = () => {
    setState({
      status: dataRef.current ? 'success' : 'error',
      isFetching: false,
      error: dataRef.current ? null : '404',
      data: dataRef.current,
    });
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (delay !== -1) {
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
    refetch,
    isError: !!error,
  }
}
