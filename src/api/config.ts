const isProduction = process.env.NODE_ENV === 'production';
export const BASE_URL = isProduction ? `http://${window.location.host}/api` : 'http://localhost:3000/api';
export const API_TIMEOUT = 15 * 1000;
