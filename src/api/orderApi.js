import {config} from './frontConfig'
import {reqRealEndAsync, reqRealEndAsyncNoCallback} from './axiosCommon'
import store from '../store/index'

export const queryBalance =()=>{
    reqRealEndAsync("post", config.domain, "/api/balance",
        {uid: sessionStorage.getItem("uid")},
        (code, msg, data) => {
        //wrong
        // store.state.positionData = data;
        store.commit("updateBalance", data);
        })
};
//委托
export const queryOrder =()=>{
    reqRealEndAsync("post", config.domain, "/api/orderInfo",
        {uid: sessionStorage.getItem("uid")},
        (code, msg, data) => {
            store.commit("updateOrder", data);
        })
};
//
export const queryTrade =()=>{
    reqRealEndAsync("post", config.domain, "/api/tradeInfo",
        {uid: sessionStorage.getItem("uid")},
        (code, msg, data) => {
            store.commit("updateTrade", data);
        })
};
//持仓
export const queryPosition =()=>{
    reqRealEndAsync("post", config.domain, "/api/positionInfo",
        {uid: sessionStorage.getItem("uid")},
        (code, msg, data) => {
            store.commit("updatePosition", data);
        })
};

//股票代码
export const queryStocksByCode =(params)=>{
    return reqRealEndAsyncNoCallback("get", config.domain, "/api/getStockInfo", params);
};

//发送委托
export const sendOrder = (params, callback) =>{
    reqRealEndAsync("post", config.domain, "/api/sendOrder",
        params, callback);
}