/*
 * @Descripttion:
 * @version: 1.0.0
 * @Author: zyj
 * @Date: 2020-08-03 20:34:05
 * @LastEditors: zyj
 * @LastEditTime: 2020-08-13 01:15:48
 * @Description: egg service description
 */
'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UgvSchema = new Schema({
    type:{
      type: String,
      required: true,
      unique: true
    },
    default_map:{
      type: Object,
    },
    chassis_param:{
      type: Object,
      required: true
    },
    nav_param: {
      type: Object,
      required: true
    }
  });
  return mongoose.model('UgvModel', UgvSchema,'ugv');
};
