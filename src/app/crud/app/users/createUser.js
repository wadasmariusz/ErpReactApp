import axios from "axios";
import { BASE_URL_API } from "app/config/env";

export const createUser = (data) =>
  axios({
    method: "POST",
    url: `${BASE_URL_API}/v1/users`,
    data
  });
