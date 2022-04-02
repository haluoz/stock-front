import {config} from './frontConfig'
import {reqRealEndAsync} from './axiosCommon'

export const queryCaptcha = (callback) =>{
    return reqRealEndAsync("get", config.domain, "login/captcha", {}, callback);
}

export const login= (params, callback) =>{
    console.log("sending login request");
    return reqRealEndAsync("get", config.domain, "login/userLogin", params, callback);
}