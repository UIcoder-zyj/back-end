/*
 * @Description: map control
 * @version: 1.0.0
 * @Author: zyj
 * @Date: 2020-07-30 00:36:10
 * @LastEditors: zyj
 * @LastEditTime: 2020-08-13 00:44:46
 */
"use strict";

const Controller = require("egg").Controller;
const mapFunction=require('../common/map/map.js');
class MapController extends Controller {
  startSlam(){
    const result=mapFunction.startRosSlam();
    this.ctx.body={
      result: result
    }
  };
  async addMap(){
    const _par = this.ctx.request.body;

    const map_state = await this.ctx.service.mapService.saveMap(_par);
    if(map_state.code===310 && par.model !== "inherit"){
      mapFunction.saveRosMap(_par.map_name);
    }
    this.ctx.body={map_state};

  }
  // saveSlamMap(){
  //   return mapFunction.saveSlamMap();
  // }
  endSlam(){
    const result= mapFunction.endRosSlam();
    this.ctx.body={
      result: result
    }
  };
  saveMapAs(){

  //  return mapFunction.saveMapAs(map);
  }



}

module.exports =MapController;
