"use strict";
const Service = require("egg").Service;
const state = require("../status/operatorState.js");
const trajectoryModel = require("../model/trajectoryModel.js");

class TrajectoryService extends Service {
  async loadTrajectory(id){
    const _tTrajectory=await this.ctx.model.trajectoryModel.find({id:id});
    if(_tTrajectory){
      console.log(_tTrajector);
    }
  }

}
module.exports = TrajectoryService;

