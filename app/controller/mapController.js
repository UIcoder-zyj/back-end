/*
 * @Description: map control
 * @version: 1.0.0
 * @Author: zyj
 * @Date: 2020-07-30 00:36:10
 * @LastEditors: zyj
 * @LastEditTime: 2020-07-30 13:06:26
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
  saveSlamMap(){
    return mapFunction.saveSlamMap();
  }
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
