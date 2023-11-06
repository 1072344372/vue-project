// src/http/index.js
//创建统一请求api
import axios from '../http/axios'
/**
 @author 吴宗波
 @params data 请求参数 json 格式
 @description 用户登录方法
 */
const login=(data)=>{
    return axios.request({
        url:'/api/userinfo/login',//api/mobile/elogin
        method:'post',
        data
    })
}
const getArticleById=(id)=>{
    return axios.request({
        url:'/api/article/one?id='+{id},//api/mobile/elogin
        method:'get',
    })
}
//导出请求方法
export {
    login,getArticleById,
}