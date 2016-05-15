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
module.exports = mongoose.model('Location',LocationSchema);
