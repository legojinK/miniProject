import axios from "axios";
const API_KEY = import.meta.env.VITE_API_KEY;
const api = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
    },
});

//요청 인터셉터 추가하기
api.interceptors.request.use(
    //요청이 전달되기 전에 작업수행
    function (config) {
        return config;
    },
    function (error) {
        //요청 오류가 있는 작업 수행
        return Promise.reject(error);
    }
);

//응답 인터셉터 추가하기
api.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default api