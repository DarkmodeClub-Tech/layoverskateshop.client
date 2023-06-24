import axios from "axios";

export const api = axios.create({
  baseURL: `https://lvr-server.onrender.com`,
  headers: {
    Accept: "application/json, text/plain, */*",
    // "User-Agent": "*",
  },
  timeout: 15000,
});
