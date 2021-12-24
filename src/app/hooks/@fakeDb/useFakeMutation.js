import {useDispatch} from "react-redux";
import {actionFakeElementSet} from "app/redux/@fakeDb/actionTypes/action_fakeElementSet";
import {useMutation} from "react-query";
import {actionFakeElementRemove} from "app/redux/@fakeDb/actionTypes/action_fakeElementRemove";

export const useFakeMutation = (names, config) => {
  console.log(names, config)
  const {
    groupName,
    elementName,
  } = names || {};

  const {
    onError = () => {console.log('er')},
    onSuccess = () => {console.log('su')},
    onSettled = () => {console.log('st')},
    dataProcessor = data => data,
    isDelete = false,
    delay = 700,
  } = config || {};

  const dispatch = useDispatch();

  const mutateFn = async (data) => {
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        isDelete ? (
          dispatch(actionFakeElementRemove(groupName, elementName))
        ) : (
          dispatch(actionFakeElementSet(groupName, elementName, dataProcessor(data)))
        );
        resolve(data);
      }, delay);
    });
  }

  const {
    isLoading,
    isError,
    error,
    isSuccess,
    mutate,
  } = useMutation(mutateFn, {
    onError,
    onSuccess,
    onSettled,
  });
  // console.log(
  //   isLoading,
  //   isError,
  //   error,
  //   isSuccess,
  // )

  return {
    mutate,
    isLoading,
    isError,
    error,
    isSuccess,
  }
}
