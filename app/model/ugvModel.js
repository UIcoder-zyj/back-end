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
