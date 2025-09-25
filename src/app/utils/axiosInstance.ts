import axios from "axios";

export const BASE_URL = "https://backend.rohitkumar.site/";

const axiosInstance = axios.create({
  url: BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
