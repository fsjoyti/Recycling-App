/**
 * Created by Anastasia on 5/14/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
    zipcode :  Number,
    name:String,
    city : String,
    address : String







});
var LocationModel = mongoose.model('Location', LocationSchema);
module.exports = mongoose.model('Location',LocationSchema);


var ResinSchema = new Schema({
    number :  Number,
    description:String,
    examples : {type:Array},
    location :[{type: mongoose.Schema.Types.ObjectId, ref: 'LocationModel'}]







});

module.exports = mongoose.model('Recycling',ResinSchema);