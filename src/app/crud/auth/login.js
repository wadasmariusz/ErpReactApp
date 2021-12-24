import axios from 'axios';
import {BASE_URL_API} from "app/config/env";

export const login = (data) => axios({
  method: 'POST',
  url: `${BASE_URL_API}/account/sign-in`,
  data,
});
