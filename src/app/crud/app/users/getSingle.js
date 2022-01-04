import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getSingle = (userId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/users/${userId}`,
  });

export const useGetSingleUser = (userId) =>
  useQuery2({
    queryKey: ["app.user", userId],
    queryFn: getSingle,
    extractData: ({data}) => data?.data
  });
