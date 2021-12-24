import PropTypes from "prop-types";
import { useQuery } from "react-query";

const useQuery2 = ({
  queryKey: _queryKey,
  queryFn,
  config,
  isArray = false,
  extractData = (data) => data,
}) => {
  const [, ...queryKey] = _queryKey;

  const {
    data: queryData,
    error,
    status,
    refetch,
    isError,
    isSuccess,
    isLoading,
    isFetching,
    isPreviousData,
    ...rest
  } = useQuery(_queryKey, () => queryFn(queryKey), config);
  const data = status === "success" ? extractData(queryData) : isArray ? [] : {};
  return {
    data,
    error,
    status,
    refetch,
    isError,
    isSuccess,
    isLoading,
    isFetching,
    isPreviousData,
    ...rest,
  };
};

useQuery2.propTypes = {
  queryFn: PropTypes.func.isRequired,
  queryKey: PropTypes.array.isRequired,
};

export default useQuery2;
