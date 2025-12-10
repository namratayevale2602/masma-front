import axios from "axios";

export const API_BASE_URL = "https://masma-back.demovoting.com/api";
export const IMAGE_PATH = "https://masma-back.demovoting.com/uploads";

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
