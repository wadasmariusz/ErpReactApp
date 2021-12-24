import {useSelector} from "react-redux";

export const selectUser = () => (
  ({auth}) => (
    auth?.user
  )
);

export const useSelectUser = () => {
  return useSelector(
    ({auth:{user}}) => user,
  );
}
