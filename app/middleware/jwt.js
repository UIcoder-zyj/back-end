/*
 * @Descripttion: jwt middlware
 * @version: 1.0.0
 * @Author: zyj
 * @Date: 2020-07-30 11:28:56
 * @LastEditors: zyj
 * @LastEditTime: 2020-07-30 13:05:21
 * @Description: egg service description
 */

"use strict";
const fs = require("fs");
const path = require("path");
const jwtUtil=require('../common/jwt/JwtUtil');

module.exports= (options, app)=>{
  return async function jwt(ctx,next){
    if(ctx.path==='/api/user/register'||ctx.path=== '/api/user/login'){
      await next();
      return;
    }
    const token=ctx.request.header.authorization
        .replace("Bearer ", "").replace(/\"/g, "") ;
    if(!token){
      ctx.throw(500,'未登录，请先登录');
      return;
    }else{
      let decode;
      try{
        let jwt=jwtUtil.getInstance(token);
        decode=jwt.verifyToken();
        if(decode==='err' || !decode.data.username){
          ctx.throw(501,'没有权限，请登录');
          return;
        }
        if(Math.floor(Date.now() / 1000)-decode.exp>0){
          ctx.throw(502,'验证已过期，请重新登录')
          return;
        }
        const user=await ctx.model.UserModel.find({
          username: decode.data.username
        });
        if(user){
          await next();
          return;
        }else{
          ctx.throw(503,'用户信息验证失败');
          return;
        }
      }catch(e){
        console.log(e);
        return;
      }
    }
  }
}
