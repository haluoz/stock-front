import Qs from 'qs';
import axios from 'axios';
import router from '../router';
// 通用公用方法（包含回调）
export const reqRealEndAsync=(method, baseUrl, url, params, callback) =>{
    params.token = sessionStorage.getItem('token');
    const config = {
        method:method,
        timeout: 5000,
        baseURL: baseUrl,
        url: url,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        //默认为false 后端需要split
        traditional: true
    }
    if (method === 'get') {
        config.params = params
    } else {
        config.data = Qs.stringify(params)
    }
    return axios(config).then(res => {
        //bodu:{code:0, message:"xxx", data:'xxx'}
        let result = res.data;
        if(result.code == 1){
            //fail
            router.replace({
                path: "login",
                query: {
                    msg: result.message
                }
            })
        }else if(result.code == 0){
            //success
            if(callback != undefined){
                callback(result.code, result.message, result.data);
            }
        }else{
            console.error(result);
        }
    });
}
// 通用公用方法（不包含回调）
export const reqRealEndAsyncNoCallback=(method, baseUrl, url, params) =>{
    params.token = sessionStorage.getItem('token');
    return axios({
        timeout: 5000,
        baseURL: baseUrl,
        url: url,
        headers: {
            'Content-type': 'application/x-www-form-urlencoded'
        },
        data: Qs.stringify(params),
        //默认为false 后端需要split
        traditional: true
    });
}