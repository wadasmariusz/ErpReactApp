import {BASE_URL} from "app/config/env";

export const authRoutes = {
  'auth.login':           `${BASE_URL}/auth/login`,
  'auth.logout':          `${BASE_URL}/logout`,
  'auth.register':        `${BASE_URL}/auth/register`,
  'auth.unauthorized':    `${BASE_URL}/auth/unauthorized`,
  'auth.password.reset':  `${BASE_URL}/auth/password/reset`,
  'auth.password.forgot': `${BASE_URL}/auth/password/forgot`,
};
