import {useMemo} from "react";

export const useOptions = (
  query,
  mapFn = ({name, id}) => ({
    value: id,
    label: name,
  })
) => {
  const {data, isLoading, isFetching} = query();
  const options = useMemo(() => {
    if (data?.length) {
      return data.map(mapFn);
    }
    return [];
  }, [data]);

  return {
    options,
    isLoading,
    isFetching,
  }
}
