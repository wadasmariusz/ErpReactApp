import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingleGroupedProductByKind = (warehouseId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/warehouses/${warehouseId}/kind-list`,
  });

export const useGetSingleWarehouseGroupedProductByKindShare = (warehouseId) =>
  useQuery2({
    queryKey: ["app.warehouse.grouped", warehouseId],
    queryFn: getSingleGroupedProductByKind,
    extractData: ({data}) => data?.data
  });
