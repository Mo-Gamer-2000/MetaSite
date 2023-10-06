import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000/api", // correct backend server address
});

export default axiosInstance;
