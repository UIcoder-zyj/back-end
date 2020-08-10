/*
 * @Descripttion: use service
 * @version: 1.0.0
 * @Author: zyj
 * @Date: 2020-07-30 00:34:15
 * @LastEditors: zyj
 * @LastEditTime: 2020-07-30 12:44:13
 */

"use strict";
const Service = require("egg").Service;
const state = require("../status/operatorState.js");
const jwtUtil = require("../common/jwt/JwtUtil");
const UgvModel = require("../model/ugvModel.js");

class UgvService extends Service {
  async loadAll() {
    const _tUgv = await this.ctx.model.UgvModel.find({});
    let result={
      default: false,
      user:  false
    }
    for(let item of _tUgv){
      if(item.type==="default"){
        this.app.locals['default']=item;
        result.default=true;
      }else if(item.type==='user'){
        this.app.locals['ugv_user']=item;
        result.user=true;
      }
    }
    if(result.default &&result.user){
      const success_result=state.UGV.LOAD_ALL.LOAD_SUCCESS;
      success_result.ugv_info=_tUgv.filter(item=>item.type==='user')[0];
      return success_result;
    }else if(result.default){
      return state.UGV.LOAD_ALL.LOAD_USER_FAILE;
    }else if(result.user){
      return state.UGV.LOAD_ALL.LOAD_DEFAULT_FAILE;
    }else{
      return state.UGV.LOAD_ALL.LOAD_FAILE;

    }
  }
}
module.exports = UgvService;
