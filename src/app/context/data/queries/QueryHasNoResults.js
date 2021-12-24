import { useQueryContext } from "app/context/data/queries/QueryProvider";

export const QueryHasNoResults = ({ children }) => {
  const { data, status } = useQueryContext();
  return status === "success" &&
    data &&
    data?.length != null &&
    data?.length === 0
    ? children
    : null;
};
