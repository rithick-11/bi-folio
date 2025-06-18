import axios from "axios";

const mode = import.meta.env.VITE_MODE;

let baseurl = "http://localhost:3010";
const serverUrl = import.meta.env.VITE_SERVER_BASEURL;

if (mode === "PRODUCTION") {
  baseurl = serverUrl;
}

const api = axios.create({
  baseURL: baseurl,
});

export default api;
