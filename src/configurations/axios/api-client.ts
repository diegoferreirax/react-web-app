import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_MOCK_API,
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    response => {
        return response.data;
    },
    error => {
        console.error('API call failed:', error);
        /*if (error.response.status === 401) {
        } else if (error.response.status === 404) {
        }*/
        return Promise.reject(error);
    }
);

export default apiClient;