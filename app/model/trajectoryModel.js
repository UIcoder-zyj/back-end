"use strict";
module.exports = (app) => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const TrajectorySchema = new Schema({
    id: {
      type: Number,
      required: true,
      unique: true,
    },
    name:{
      type: String,
      required: true
    },
    product_by:{
      type: String,
      required: true
    },
    is_close:{
      type: Boolean,
      required: true
    },
    points:{
      type: Array,
      required: true
    },
    states:{
      type: Array,
      required: true
    },
    point_id_max:{
      type: Number,
      required: true
    }
  });
  return mongoose.model("TrajectoryModel", TrajectorySchema, "trajectories");
};
