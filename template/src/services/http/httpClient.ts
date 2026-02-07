// import axios from "axios";
// import Config from "react-native-config";
// import { authToken } from "@/storages/appLanguage";

// export const httpClient = axios.create({
//   baseURL: Config.API_BASE_URL,
// });

// httpClient.interceptors.request.use(req => {
//   const token = authToken.get();
//   if (token) req.headers.Authorization = `Bearer ${token}`;
//   req.headers.Accept = "application/json";
//   return req;
// });

// httpClient.interceptors.response.use(
//   res => res,
//   err => Promise.reject(err),
// );
