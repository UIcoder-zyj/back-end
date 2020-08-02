'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const MapSchema = new Schema({
    name: {
      type: String,
      unique: true,
      required: true,
    },
    map_name:{
      type: String,
      required: true,
    },
    resolution:{
      type: Number,
      required: true,
    },
    trajectory: {
      type: Number,
      required: true
    },
    charges:{
      type: Array,
      required: true
    },
    targets:{
      type: Array,
      required: true
    },
    walls:{
      type: Array,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  });
  return mongoose.model('MapModel', MapSchema,'maps');
};
