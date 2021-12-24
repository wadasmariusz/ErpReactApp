import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import { usePaginatedQuery2 } from "app/hooks/crud/usePaginatedQuery2";

const getList = ({ page, perPage }, []) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/warehouses`,
    params: {
      CurrentPage: page,
      PerPage: perPage,
    },
  });

export const useGetWarehouses = () =>
  usePaginatedQuery2({
    queryKey: ["app.warehouses"],
    queryFn: getList,
    extractData: data => data?.data?.items
  });
