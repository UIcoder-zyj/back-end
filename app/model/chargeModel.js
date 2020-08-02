'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const ChargeSchema = new Schema({
    id: {
      type: Number,
      unique: true,
      required: true,
    },
    name:{
      type: String,
      required: true,
    },
    product_by:{
      type: String,
      required: true,
    },
    position:{
      type: {
        x: Number,
        y: Number,
        z: Number
      },
      required: true
    },


  });
  return mongoose.model('ChargeModel', ChargeSchema,'charges');
};
