import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:7244/api"
});

export default api;