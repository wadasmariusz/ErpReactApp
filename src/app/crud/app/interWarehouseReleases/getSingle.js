import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (interWarehouseReleaseId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/inter-warehouse-releases/${interWarehouseReleaseId}`,
  });

export const useGetSingleInterWarehouseRelease = (interWarehouseReleaseId) =>
  useQuery2({
    queryKey: ["app.interWarehouseRelease", interWarehouseReleaseId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
