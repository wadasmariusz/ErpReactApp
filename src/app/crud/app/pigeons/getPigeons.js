import axios from 'axios';
import {BASE_URL_API} from "app/config/env";
import {usePaginatedQuery2} from "app/hooks/crud/usePaginatedQuery2";

const getPigeons = ({page, perPage}, props, {positionId, search}) => axios({
  method: 'GET',
  url: `${BASE_URL_API}/v1/fancier-panel/pigeons`,
  params: {
    PageNumber: page,
    PageSize: perPage,
    positionId,
    search,
  },
}).then(({data}) => data);

export const useGetPigeons = () => usePaginatedQuery2({
  queryKey: ['app.pigeons'],
  queryFn: getPigeons,
});
