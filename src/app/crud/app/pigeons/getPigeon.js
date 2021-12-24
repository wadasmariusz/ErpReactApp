import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getPigeon = ([pigeonId]) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/fancier-panel/pigeons/${pigeonId}`,
  }).then(({ data }) => data);

export const useGetPigeon = (pigeonId) =>
  useQuery2({
    queryKey: ["app.pigeon", pigeonId],
    queryFn: getPigeon,
    extractData: (data) => data.data,
  });
