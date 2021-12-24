import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";

const getPigeonColors = () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/list/pigeon-colors`,
    params: {},
  }).then(({ data }) => data.items);

const useGetPigeonColors = () =>
  useQuery2({
    queryKey: ["app.list.pigeonColors"],
    queryFn: getPigeonColors,
    isArray: true,
  });

export const usePigeonColors = () => useOptions(useGetPigeonColors);
