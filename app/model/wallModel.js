'use strict';
module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const WallSchema = new Schema({
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
    center_point:{
      type: Object,
      required: true
    },
    points:{
      type: Array,
      required: true
    }


  });
  return mongoose.model('WallModel', WallSchema,'walls');
};
