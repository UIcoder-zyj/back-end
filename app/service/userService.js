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
const jwtUtil= require('../common/jwt/JwtUtil')

class UserService extends Service {
  /**
   * @name: login
   * @msg:  user login service
   * @param user login msg
   * @return: login state or null
   */
  async login(obj) {
    const query_msg = { username: obj.username };
    const _tUser = await this.ctx.model.UserModel.findOne(query_msg);
    if (_tUser) {
      if (_tUser.password === obj.password) {
        let jwt =jwtUtil.getInstance(_tUser);
        let token=jwt.generateToken();
        state.USER.LOGIN.LOGIN_SUCCESS.token=token;
        return state.USER.LOGIN.LOGIN_SUCCESS;
      } else {
        return state.USER.LOGIN.PASSWORD_ERROR;
      }
    } else {
      return state.USER.LOGIN.USERNAME_NOT_FOUND;
    }
  }
  async register(obj) {
    const _tUser = await this.ctx.model.UserModel.findOne({
      username: obj.username,
    });
    if (_tUser) {
      if (_tUser.username === obj.username) {
        let error = state.USER.USERNAME_EXIST;
        return state.USER.REGISTER.USERNAME_EXIST;
      }
    } else {
      const _muser = new this.ctx.model.UserModel({
        username: obj.username,
        password: obj.password,
      });
      _muser.save();
      return state.USER.REGISTER.REGISTER_SUCCESS;
    }
  }
}
module.exports = UserService;
