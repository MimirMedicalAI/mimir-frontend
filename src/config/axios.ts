import axios from 'axios';

// Create axios instance with custom config
const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_LCARS_API_HOST}/api/`,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

console.log('API Host:', import.meta.env.VITE_LCARS_API_HOST)

export default axiosInstance