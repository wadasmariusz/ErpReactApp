import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import { usePaginatedQuery2 } from "app/hooks/crud/usePaginatedQuery2";

const getList = ({ page, perPage, ...rest}, [], filters) => {

  return axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/sheets`,
    params: {
      CurrentPage: page,
      PerPage: perPage,
      ...filters
    },
  });
}

export const useGetSheets = () =>
  usePaginatedQuery2({
    queryKey: ["app.sheets"],
    queryFn: getList,
    extractData: data => data?.data?.items
  });
