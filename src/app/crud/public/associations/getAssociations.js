import axios from "axios";
import { BASE_URL_API } from "app/config/env";
import { usePaginatedQuery2 } from "app/hooks/crud/usePaginatedQuery2";

const getAssociations = ({ page, perPage }, []) =>
  axios({
    method: "GET",
    url: `${BASE_URL_API}/v1/associations`,
    params: {
      CurrentPage: page,
      PerPage: perPage,
    },
  });

export const useGetAssociations = () =>
  usePaginatedQuery2({
    queryKey: ["public.associations"],
    queryFn: getAssociations,
    extractData: data => data?.data?.items
  });
