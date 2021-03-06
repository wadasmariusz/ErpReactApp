import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import { usePaginatedQuery2 } from "app/hooks/crud/usePaginatedQuery2";

const getList = ({ page, perPage, ...rest}, [], filters) => {

  return axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/coils`,
    params: {
      CurrentPage: page,
      PerPage: perPage,
      ...filters
    },
  });
}

export const useGetCoils = () =>
  usePaginatedQuery2({
    queryKey: ["app.coils"],
    queryFn: getList,
    extractData: data => data?.data?.items
  });
