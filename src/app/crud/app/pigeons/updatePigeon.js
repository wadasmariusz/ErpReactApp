import axios from "axios";
import {BASE_URL_API} from "app/config/env";

export const updatePigeon = (pigeonId) => (data) => axios({
  method: 'PUT',
  url: `${BASE_URL_API}/v1/fancier-panel/pigeons/${pigeonId}`,
  data,
});
