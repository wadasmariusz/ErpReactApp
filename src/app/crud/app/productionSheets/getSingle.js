import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (productionSheetId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/production-sheets/${productionSheetId}`,
  });

export const useGetSingleProductionSheet = (productionSheetId) =>
  useQuery2({
    queryKey: ["app.productionSheet", productionSheetId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
