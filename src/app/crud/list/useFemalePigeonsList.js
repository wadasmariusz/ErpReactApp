import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";
import {mapRingNoToOption} from "app/utility/mapRingNoToOption";

const getFemalePigeonsList = () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/list/pigeon-females`,
    params: {},
  }).then(({ data }) => data.items);

const useGetFemalePigeonsList = () =>
  useQuery2({
    queryKey: ["app.list.femalePigeons"],
    queryFn: getFemalePigeonsList,
    isArray: true,
  });

export const useFemalePigeonsList = () => useOptions(useGetFemalePigeonsList, mapRingNoToOption);
