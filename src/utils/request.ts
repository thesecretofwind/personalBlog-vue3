import axios, { AxiosResponse } from "axios";

const baseURL = 'http://localhost:3000'

const instance = axios.create({
    baseURL,
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json'
    }
});

instance.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

interface IResponse {
    code: number;
    data: Object;
    message: string;
};


instance.interceptors.response.use(
    (response):any => {
        if (response.status === 200) {
            const {data} = response;
            if (data.code === 511) { 
                // 未授权调取授权接口
            } else if (data.code === 401) {
                // 未登录，跳转至登录页面
            } else {
                return Promise.resolve(response.data);
            }
        }
    },
    error => {
        return Promise.reject(error);
    }
);


export function httpGet(url: string, params: Object = {}) {
    return instance.get(url, {params})
    .then(res => res.data)
    .catch(err => err)
};



export function httpPost(url: string, data:Object={}) {
    return axios.post(url, data)
        .then(res => res.data)
        .catch(err => err)
}




