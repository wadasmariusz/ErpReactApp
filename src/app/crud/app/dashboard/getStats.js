import axios from "axios";
import {BASE_URL_API} from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getStats = (dovecoteId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/fancier-panel/dashboard`,
  });

export const useGetStats = () =>
  useQuery2({
    queryKey: ["app.dashboard"],
    queryFn: getStats,
    extractData: ({data}) => data?.data
  });
