import axios from "axios";
import {BASE_URL_API} from "app/config/env";

export const deletePigeon = (pigeonId) => () => axios({
  method: 'DELETE',
  url: `${BASE_URL_API}/v1/fancier-panel/pigeons/${pigeonId}`,
});
