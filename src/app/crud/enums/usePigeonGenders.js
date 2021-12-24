import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";

const getPigeonGenders = () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/list/pigeon-genders`,
    params: {},
  }).then(({ data }) => data.items);

const useGetPigeonGenders = () =>
  useQuery2({
    queryKey: ["app.list.pigeonGenders"],
    queryFn: getPigeonGenders,
    isArray: true,
  });

export const usePigeonGenders = () => useOptions(useGetPigeonGenders);
