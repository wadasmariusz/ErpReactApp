import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getProfile = () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/profile`,
  });

export const useGetProfile = () =>
  useQuery2({
    queryKey: ["app.profile"],
    queryFn: getProfile,
    extractData: (data) => data.data.data,
  });
