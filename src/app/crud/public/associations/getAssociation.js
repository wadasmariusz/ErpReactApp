import axios from "axios";
import {BASE_URL_API} from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getAssociation = ([associationId]) => axios({
  method: 'GET',
  url: `${BASE_URL_API}/api/associations/${associationId}`,
}).then(({data}) => data);

export const useGetPosition = (associationId) => useQuery2({
  queryKey: ['app.associations', associationId],
  queryFn: getAssociation,
});
