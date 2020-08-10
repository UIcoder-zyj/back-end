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
    let user_state={};
    let ugv_state={};
    let map_state={};
    const _par = this.ctx.request.body;
    user_state = await this.ctx.service.userService.login(_par);
    if(user_state.code===100){
      ugv_state=await this.ctx.service.ugvService.loadAll();
      if(ugv_state&&ugv_state.code===200){
        let map=this.app.locals['ugv_user'].default_map;
        console.log('map is: ',map);
        if(map && Object.keys(map).length !== 0){
          map_state=await this.ctx.service.mapService.loadMap(map,false);
        }
      }
    }
    this.ctx.body = {
      user_state,
      ugv_state,
      map_state
    };
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
