import axios, { AxiosRequestConfig } from "axios";

export type ReqwestType = AxiosRequestConfig & {

    /**
     * if true get token from localStorage
     */

    hasToken?: boolean


    /**
     * default tokenName = Bearer
     */

    tokenName?: string

    /**
     * set true rewite header Content-Type = multipart/form-data
    */

    isUpload?: boolean
}

const API_URL = process.env.NODE_ENV === 'development'
    ? 'https://api.ducking.vn/api/v1/'
    : 'product';

const reqwestService = axios.create({
    baseURL: API_URL
});

reqwestService.interceptors.request.use(function (config) {
    window.dispatchEvent(new CustomEvent('reqwest', { detail: { loading: true } }))
    return config
});

reqwestService.interceptors.response.use(function (response) {
    window.dispatchEvent(new CustomEvent('reqwest', { detail: { loading: false } }))
    return response
}, function (error) {
    window.dispatchEvent(new CustomEvent('reqwest', { detail: { loading: false, error } }))
    return Promise.reject(error)
})

export {
    reqwestService
}

export async function reqwest(config: ReqwestType) {
    let reqwestToken: null | string = null;

    const hasToken = config?.hasToken;
    const isUpload = config?.isUpload;
    const tokenName = config?.tokenName ?? 'Bearer';

    if (hasToken) {
        reqwestToken = localStorage.getItem('reqwest');
    }

    const headers = {
        'Content-Type': isUpload ? 'multipart/form-data' : 'application/json;charset=UTF-8',
        ...(hasToken ? { Authorization: `${tokenName} ${reqwestToken}` } : {})
    }

    let reqwestConfig: ReqwestType = {
        headers
    }

    reqwestConfig = Object.assign(reqwestConfig, config);

    try {
        const resp = await reqwestService(reqwestConfig);
        return resp.data;
    } catch (error) {
        return null;
    }
}