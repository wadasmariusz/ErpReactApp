import axios from 'axios';

export const setupAxios = (store) => {
  // add user token to axios if provided
  axios.interceptors.request.use(
    config => {
      const { auth: { userToken } } = store.getState();
      if(!config.url) console.error('request.url is undefined');
      if (userToken) {
        config.headers.Authorization = `Bearer ${userToken}`;
      }
      return config;
    },
    err => Promise.reject(err)
  );

  // axios.interceptors.response.use(
  //   response => {
  //     if(response && response.headers && response.headers['content-type'] ==='text/html'){
  //       console.error(`Expected 'application/json' got 'text/html`)
  //       return Promise.reject(`Expected 'application/json' got 'text/html'`);
  //     }
  //     return response;
  //   },
  //   error => {
  //     if(error.request.status === 401) {
  //       store.dispatch(logout('session.expired'));
  //     }
  //     return Promise.reject(error);
  //   }
  // );
}
