import axios from "axios";
import { BASE_URL_API } from "app/config/env";

export const deletePigeonPhoto = (pigeonId, data) =>
  axios({
    method: "DELETE",
    url: `${BASE_URL_API}/v1/fancier-panel/pigeons/${pigeonId}/profile-photo`,
  });
