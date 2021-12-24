import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (warehouseId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/warehouses/${warehouseId}`,
  });

export const useGetSingleWarehouse = (warehouseId) =>
  useQuery2({
    queryKey: ["app.warehouse", warehouseId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
