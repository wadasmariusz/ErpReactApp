import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";

const getPigeonEyeColors = () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/list/pigeon-eye-colors`,
    params: {},
  }).then(({ data }) => data.items);

const useGetPigeonEyeColors = () =>
  useQuery2({
    queryKey: ["app.list.pigeonEyeColors"],
    queryFn: getPigeonEyeColors,
    isArray: true,
  });

export const usePigeonEyeColors = () => useOptions(useGetPigeonEyeColors);
