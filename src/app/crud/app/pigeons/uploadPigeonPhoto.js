import axios from "axios";
import { BASE_URL_API } from "app/config/env";

export const uploadPigeonPhoto = (pigeonId) => (data) =>
  axios({
    method: "POST",
    url: `${BASE_URL_API}/v1/fancier-panel/pigeons/${pigeonId}/profile-photo`,
    data,
  });
