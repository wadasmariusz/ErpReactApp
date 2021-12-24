import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (pigeonNoticeId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/fancier-panel/pigeon-notices/${pigeonNoticeId}`,
  });

export const useGetSinglePigeonNotice = (pigeonNoticeId) =>
  useQuery2({
    queryKey: ["app.pigeonNotice", pigeonNoticeId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
