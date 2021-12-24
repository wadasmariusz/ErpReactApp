import axios from "axios";
import {BASE_URL_API} from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";


const getPigeons = ({page, perPage}) => axios({
  method: 'GET',
  url: `${BASE_URL_API}/v1/fancier-panel/pigeons/list`,
  params: {
    PageNumber: page,
    PageSize: perPage,
  },
}).then(({data}) => data.data);

export const useGetSimplePigeons = () => useQuery2({
  queryKey: ['app.pigeons.simple'],
  queryFn: getPigeons,
  isArray: true,
});
