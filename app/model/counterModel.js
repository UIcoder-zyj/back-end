'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const counterSchema = new Schema({
    _id: {
      type: String,
      unique: true,
      required: true,
    },
    sequence_value:{
      type:Number,
      required:true
    }
  });
  return mongoose.model('CounterModel', counterSchema,'counters');
};
