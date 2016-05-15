/**
 * Created by Anastasia on 5/14/2016.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var LocationSchema = new Schema({
    locationID:Number,
    zipcode :  Number,
    name:String,
    city : String,
    address : String
    
});
var LocationModel = mongoose.model('Location', LocationSchema);


// Saving it to the database.
LocationModel.insert(
    {
        locationID:1,
        zipcode :  Number,
        name:String,
        city : String,
        address : String
    }
);
LocationModel.insert(
    {
        locationID:Number,
        zipcode :  Number,
        name:String,
        city : String,
        address : String
    }
);
LocationModel.insert(
    {
        locationID:Number,
        zipcode :  Number,
        name:String,
        city : String,
        address : String
    }
);
module.exports = mongoose.model('Location',LocationSchema);


var ResinSchema = new Schema({
    RecycleId: Number,
    number :  Number,
    description:String,
    examples : {type:Array},
    location :[{locationId:Number}]







});

var RecyclingModel = mongoose.model('Recycling', ResinSchema);


module.exports = mongoose.model('Recycling',ResinSchema);
RecyclingModel.insert(
    {
        RecycleId: Number,
        number :  Number,
        description:String,
        examples : {type:Array},
        locationIDs: [{locationID: 1}]
    }
);
RecyclingModel.insert(
    {
        RecycleId: Number,
        number :  Number,
        description:String,
        examples : {type:Array},
        locationIDs: [{locationID: 2}]

    }
);
RecyclingModel.insert(
    {
        RecycleId: Number,
        number :  Number,
        description:String,
        examples : {type:Array},
        locationIDs: [{locationID:3 }]
    }
);

