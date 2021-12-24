import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";
import { useOptions } from "app/hooks/crud/useOptions";

const getPigeonStatuses = () =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/list/pigeon-statuses`,
    params: {},
  }).then(({ data }) => data.items);

const useGetPigeonStatuses = () =>
  useQuery2({
    queryKey: ["app.list.pigeonStatuses"],
    queryFn: getPigeonStatuses,
    isArray: true,
  });

export const usePigeonStatuses = () => useOptions(useGetPigeonStatuses);
