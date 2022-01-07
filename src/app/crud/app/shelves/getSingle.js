import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (warehouseId, shelfId) => () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/warehouses/${warehouseId}/shelves/${shelfId}`,
  });

export const useGetSingleWarehouseShelf = (warehouseId, shelfId) =>
  useQuery2({
    queryKey: ["app.warehouse.shelf", warehouseId, shelfId],
    queryFn: getSingle(warehouseId, shelfId),
    extractData: ({data}) => data?.data
  });
