/*
 * @Description: user control
 * @version: 1.0.0
 * @Author: zyj
 * @Date: 2020-07-30 00:36:10
 * @LastEditors: zyj
 * @LastEditTime: 2020-07-30 13:06:26
 */
"use strict";

const Controller = require("egg").Controller;

class UserController extends Controller {
  /**
   * @name: user control login
   * @msg:
   * @param : null
   * @return:  msg to front-end
   */
  async login() {
    const _par = this.ctx.request.body;
    const userState = await this.ctx.service.userService.login(_par);
    console.log(userState);
    console.log(this.ctx);
    this.ctx.body = {
      userState,
    };
    // if (userState.code!==100) {
    //     this.ctx.sendError(userState);
    //     return;
    // }
    // this.ctx.body={
    //     userState
    // };
  }

  async register() {
    const _par = this.ctx.request.body;
    // 参数校验
    // const valiErr = await this.ctx.validator(checkRules, _par);
    // if (valiErr){
    //     this.ctx.sendError(valiErr);
    //     return;
    // }
    const userState = await this.ctx.service.userService.register(_par);
    console.log(userState);
    this.ctx.body = {
      userState,
    };
    // if (userState.code!==110) {
    //     this.ctx.sendError(userState);
    //     return;
    // }
    // this.ctx.body={
    //     userState
    // };
  }
}

module.exports = UserController;
