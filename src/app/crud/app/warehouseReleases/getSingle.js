import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (warehouseReleaseId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/warehouse-releases/${warehouseReleaseId}`,
  });

export const useGetSingleWarehouseRelease = (warehouseReleaseId) =>
  useQuery2({
    queryKey: ["app.warehouseRelease", warehouseReleaseId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
