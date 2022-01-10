import axios from 'axios';
import { BASE_URL, API_TIMEOUT } from './config';
import { handleHttpErrorStatus, removePendingKey, addPendingKey, RequestPendingMap } from './utils';

export type ApiReqParamsType = {
  url: string;
  method?: any;
  params?: any;
  data?: any;
};

const Api = (reqConfig: ApiReqParamsType, cusSettings?: any, otherConfig?: any) => {
  const { url, method, params, data } = reqConfig;
  const api = axios.create({
    timeout: API_TIMEOUT,
    baseURL: BASE_URL,
    headers: {
      Authorization: '',
    },
    ...otherConfig,
  });

  const hasCancelToken = RequestPendingMap.size > 0;

  api.interceptors.request.use(
    (config) => {
      if (hasCancelToken) removePendingKey(config);
      if (cusSettings?.repeatRequestHandle) addPendingKey(config);
      return config;
    },
    (error) => {
      return Promise.reject(error);
    },
  );

  api.interceptors.response.use(
    (res) => {
      if (hasCancelToken) removePendingKey(res.config);
      return res.data;
    },
    (error) => {
      console.log(error.response);
      const errMsg = handleHttpErrorStatus(error);
      if (errMsg) console.error(errMsg);
    },
  );

  const options =
    method === 'POST'
      ? {
          url,
          data,
          method,
        }
      : { url, params };

  return api(options);
};

export default Api;
