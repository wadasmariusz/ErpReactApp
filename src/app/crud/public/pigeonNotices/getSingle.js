import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import useQuery2 from "app/hooks/crud/useQuery2";

const getList = (noticeId) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/pigeon-notices/${noticeId}`,
  });

export const useGetSingleNotice = (noticeId) =>
  useQuery2({
    queryKey: ["public.notice", noticeId],
    queryFn: getList,
  });
