import {useSelector} from "react-redux";

export const selectToken = () => (
  ({auth}) => (
    auth?.userToken
  )
);


export const useSelectToken = () => {
  return useSelector(selectToken());
}
