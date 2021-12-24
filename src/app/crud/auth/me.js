import axios from 'axios';
import {BASE_URL_API} from "app/config/env";

export const me = () => axios({
  method: 'GET',
  url: `${BASE_URL_API}/account`,
}).then(({data}) => data);
