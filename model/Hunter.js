var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create the schemas for your application

var hunterSchema = new Schema({
    name: String,
    email: String,
    items: [{
      type: Schema.Types.ObjectId,
      ref: "Item"
    }],
    avatar: String,
    googleId: String,
    contactInfo: String,
  }, {
    timestamps: true
  });






//fill in here with the schemas that you create
module.exports = mongoose.model('Hunter',hunterSchema );