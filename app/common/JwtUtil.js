/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: zyj
 * @Date: 2020-07-30 11:54:58
 * @LastEditors: zyj
 * @LastEditTime: 2020-07-30 12:55:06
 * @Description: egg service description
 */
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

/**
 * @name: token class
 * @msg: single model to create token class
 * @param {data,intance}
 * @return: token or verify result
 */
class JwtUtil {
  static getInstance(data){
    if(!this.jwtInstance){
        this.jwtInstance=new JwtUtil(data);
      }
      this.jwtInstance.data=data;
      return this.jwtInstance;
  }
  constructor(data){
    this.data =data;
    this.instance=jwt;
    this.jwtInstance=null;
  }
    //生成token
    generateToken() {
        let data = this.data;
        let created = Math.floor(Date.now() / 1000);
        let cert = fs.readFileSync(path.join(__dirname, '../pem/rsa_private_key.pem'));//私钥 可以自己生成
        let token = this.instance.sign({
            data,
            exp: created + 60 * 30,
        }, cert, {algorithm: 'RS256'});
        return token;
    }

    // 校验token
    verifyToken() {
        let token = this.data;
        let cert = fs.readFileSync(path.join(__dirname, '../pem/rsa_public_key.pem'));//公钥 可以自己生成
        let res;
        try {
            let result = this.instance.verify(token, cert, {algorithms: ['RS256']}) || {};
            console.log("result is ",result);
            res = result ;
            // let {exp = 0} = result, current = Math.floor(Date.now() / 1000);
            // if (current <= exp) {
            //     res = result.data || {};
            // }
        } catch (e) {
            res = 'err';
        }
        return res;
    }
}
const jwtutil=JwtUtil.getInstance();
module.exports = JwtUtil;
