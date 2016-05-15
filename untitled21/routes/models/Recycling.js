/**
 * Created by Anastasia on 5/14/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var ResinSchema = new Schema({
    RecycleId: Number,
    number :  Number,
    description:String,
    examples : {type:Array},
    location :{type:Array}
});

var Recycling = mongoose.model('Recycling', ResinSchema);



module.exports = mongoose.model('Recycling',ResinSchema);

