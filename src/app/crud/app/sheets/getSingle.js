import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (sheetId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/sheets/${sheetId}`,
  });

export const useGetSingleSheet = (sheetId) =>
  useQuery2({
    queryKey: ["app.sheet", sheetId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
