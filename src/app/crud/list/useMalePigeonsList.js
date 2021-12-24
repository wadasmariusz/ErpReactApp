import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";
import {mapRingNoToOption} from "app/utility/mapRingNoToOption";

const getMalePigeonsList = () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/list/pigeon-males`,
    params: {},
  }).then(({ data }) => data.items);

const useGetMalePigeonsList = () =>
  useQuery2({
    queryKey: ["app.list.malePigeons"],
    queryFn: getMalePigeonsList,
    isArray: true,
  });

export const useMalePigeonsList = () => useOptions(useGetMalePigeonsList, mapRingNoToOption);
