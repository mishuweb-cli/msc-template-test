import axios, { AxiosRequestConfig } from 'axios';

export const RequestPendingMap = new Map();

export const handleHttpErrorStatus = (error: any): string | void => {
  if (axios.isCancel(error)) return console.error(`该请求为重复请求，已被阻止！：${error.message}`);
  let message = '请求出错了！';
  if (error?.response) {
    switch (error.response?.status) {
      case 302:
        message = '接口重定向了！';
        break;
      case 400:
        message = '参数不正确！';
        break;
      case 401:
        message = '您未登录，或者登录已经超时，请先登录！';
        break;
      case 403:
        message = '您没有权限操作！';
        break;
      case 404:
        message = `请求地址出错: ${error.response.config.url}`;
        break;
      case 408:
        message = '请求超时！';
        break;
      case 409:
        message = '系统已存在相同数据！';
        break;
      case 500:
        message = '服务器内部错误！';
        break;
      case 501:
        message = '服务未实现！';
        break;
      case 502:
        message = '网关错误！';
        break;
      case 503:
        message = '服务不可用！';
        break;
      case 504:
        message = '服务暂时无法访问，请稍后再试！';
        break;
      case 505:
        message = 'HTTP版本不受支持！';
        break;
      default:
        message = '请求异常！';
        break;
    }
  }
  if (error?.message?.includes('timeout')) message = '网络请求超时！';
  if (error?.message?.includes('Network')) message = window.navigator.onLine ? '服务端异常！' : '请检查网络！';
  return message;
};

export const getPendingKey = (config: AxiosRequestConfig): string => {
  const { url, method, params, data } = config;
  return [url, method, JSON.stringify(params), JSON.stringify(data)].join('&');
};

export const addPendingKey = (config: AxiosRequestConfig): void => {
  const pendingKey = getPendingKey(config);
  const cancelToken = new axios.CancelToken((cancel) => {
    if (!RequestPendingMap.has(pendingKey)) {
      RequestPendingMap.set(pendingKey, cancel);
    }
  });
  Reflect.defineProperty(config, 'cancelToken', {
    value: cancelToken,
  });
};

export const removePendingKey = (config: AxiosRequestConfig): void => {
  const pendingKey = getPendingKey(config);
  if (RequestPendingMap.has(pendingKey)) {
    const cancelToken = RequestPendingMap.get(pendingKey);
    cancelToken(pendingKey);
    RequestPendingMap.delete(pendingKey);
  }
};
