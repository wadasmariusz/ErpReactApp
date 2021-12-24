import axios from "axios";
import {BASE_URL_API} from "app/config/env";

export const updatePigeonNotice = (pigeonNoticeId) => (data) => axios({
  method: 'PUT',
  url: `${BASE_URL_API}/v1/fancier-panel/pigeon-notices/${pigeonNoticeId}`,
  data,
});
