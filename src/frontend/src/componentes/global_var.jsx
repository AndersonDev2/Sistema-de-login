import axios from "axios";

const server = axios.create({
  baseURL: "http://localhost:8000/api/Contas/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default server;
