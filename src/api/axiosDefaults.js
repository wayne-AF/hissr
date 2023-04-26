import axios from "axios";

// URL for deployed API on Heroku
axios.defaults.baseURL = "https://hissr-drf-api.herokuapp.com/";
// expected data format for the API
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";
// avoid CORS errors with cookies
axios.defaults.withCredentials = true;

// refreshing access tokens
export const axiosReq = axios.create();
export const axiosRes = axios.create();