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
const ugvModel = require("../model/ugvModel.js");
// const jwtUtil= require('../common/jwt/JwtUtil')

class MapService extends Service {
  /**
   * @name: map load
   * @msg:  map load service
   * @param map{id} force_switch(switch map)
   * @return: load map state or null
   */
  async loadMap(map,force_switch=false) {
    if(!force_switch&&this.app.locals['map_info']
      &&Object.keys(this.app.locals['map_info'])!==0){
      return state.MAP.LOAD.MAP_OWNED;
    }

    if(this.app.locals['map_info']&&this.app.locals['map_info'].id===map_info.id){
        return state.MAP.LOAD.MAP_LOADED;
    }
    const _tMap=await this.ctx.model.MapModel.findOne(map);
    if(!_tMap){
      return state.MAP.LOAD.NOT_FOUND;
    }

    let map_info={
      id: parseInt(_tMap.id),
      name: _tMap.name,
      map_name: _tMap.map_name,
      resolution: 0.05,
      trajectory: {},
      trajectory_id: -1,
      charges: [],
      charges_id: [],
      walls:  [],
      walls_id: [],
      targets: [],
      targets_id: []
    };
    if(_tMap.trajectory!==-1){
      const _tTrajectory=await this.ctx.model.TrajectoryModel.findOne({id:_tMap.trajectory});
      if(_tTrajectory&& Object.keys(_tTrajectory).length){
        map_info.trajectory=_tTrajectory;
        map_info.trajectory_id=_tTrajectory.id;
      }
    }
    if(_tMap.charges.length){
      const _tCharges=await this.ctx.model.ChargeModel.find({id:{$in:_tMap.charges}});
      if(_tCharges&& _tCharges.length){
        map_info.charges=_tCharges;
        map_info.charges_id=_tCharges.map(item=>item.id);
      }
    }
    if(_tMap.targets.length){
      const _tTargets=await this.ctx.model.TargetModel.find({id:{$in:_tMap.targets}});
      if(_tTargets&& _tTargets.length){
        map_info.targets=_tTargets;
        map_info.targets_id=_tTargets.map(item=>item.id);
      }
    }
    if(_tMap.walls.length){
      const _tWalls=await this.ctx.model.WallModel.find({id:{$in:_tMap.walls}});
      if(_tWalls&& _tWalls.length){
        map_info.walls=_tWalls;
        map_info.walls_id=_tWalls.map(item=>item.id);
      }
    }
    this.app.locals['map_info']=map_info;
    const result=state.MAP.LOAD.LOAD_SUCCESS;
    result.map_info=map_info;
    return result;
  }

}
module.exports = MapService;
