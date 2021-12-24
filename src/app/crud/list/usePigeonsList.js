import axios from "axios";
import {BASE_URL_API} from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import {useOptions} from "app/hooks/crud/useOptions";
import {mapRingNoToOption} from "app/utility/mapRingNoToOption";

const getPigeonsList = () => axios({
  method: 'GET',
  url: `${BASE_URL_API}/v1/fancier-panel/pigeons`,
}).then(({data}) => data?.items);


const useGetPigeonsList = () => useQuery2({
  queryKey: ['app.pigeons.list'],
  queryFn: getPigeonsList,
  isArray: true,
});

export const usePigeonsList = () => useOptions(useGetPigeonsList, mapRingNoToOption);
