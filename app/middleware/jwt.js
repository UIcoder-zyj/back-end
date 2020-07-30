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
const jwtUtil=require('../common/JwtUtil');

module.exports= (options, app)=>{
  return async function jwt(ctx,next){
    const token=ctx.request.header.authorization;
    const method=ctx.method.toLowerCase();
    if(method==='get'){
      await next();
    }else if(!token){
      if(ctx.path==='/api/register'|| '/api/login'){
        await next();
      }else{
        ctx.throw(401,'未登录，请先登录');
      }
    }else{
      let decode;
      try{
        let jwt=jwtUtil.getInstance(token);
        decode=jwt.verifyToken();
        console.log('decode is :',decode);
        if(!decode || !decode.data.username){
          ctx.throw(401,'没有权限，请登录');
        }
        if(Date.now()-decode.exp>0){
          ctx.throw(401,'验证已过期，请重新登录')
        }
        const user=await ctx.model.User.find({
          username: decode.data.username
        });
        if(user){
          await next();
        }else{
          ctx.throw(401,'用户信息验证失败');
        }
      }catch(e){
        console.log(e);
      }
    }
  }

}
