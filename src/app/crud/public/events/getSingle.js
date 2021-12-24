import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getList = (eventId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/events/${eventId}`,
  });

export const useGetSingleEvent = (eventId) =>
  useQuery2({
    queryKey: ["public.event", eventId],
    queryFn: getList,
  });
