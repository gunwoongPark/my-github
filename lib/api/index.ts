import axios, { AxiosRequestConfig } from "axios";
import { config as basedConfig } from "../config";

export const axiosInstance = axios.create({
  baseURL: basedConfig.apiBaseUri,
});

axiosInstance.interceptors.request.use(
  async (request) => {
    request.headers = request.headers ?? {};
    request.headers.Authorization = `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const apiBase = {
  get: async (url: string, config?: AxiosRequestConfig<any>) => {
    const res = await axiosInstance.get(url, config);
    return res.data;
  },
};

export default apiBase;
