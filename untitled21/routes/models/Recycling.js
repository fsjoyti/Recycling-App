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



var jsonObject = new LocationModel(
{
    locationID: 1,
    zipcode: 98109,
    name: "Recyclebike",
    city: "Seattle",
    address: "520 pike st."
});

jsonObject.save(function(err) {
    if (err)
        throw err;
});



// LocationModel.insert(
//     {
//         locationID:1,
//         zipcode :  Number,
//         name:String,
//         city : String,
//         address : String
//     }
// );
// LocationModel.insert(
//     {
//         locationID:Number,
//         zipcode :  Number,
//         name:String,
//         city : String,
//         address : String
//     }
// );
// LocationModel.insert(
//     {
//         locationID: 3,
//         zipcode :  98109,
//         name:String,
//         city : String,
//         address : String
//     }
// );
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

var ksonObject = new RecyclingModel(
{
        RecycleId: 1,
        number :  6,
        description: "description",
        examples : ["plastic bottles", "cans"],
        locationIDs: [{locationID: 1}]
});

ksonObject.save(function(err) {
    if (err)
        throw err;
});


// RecyclingModel.insert(
//     {
//         RecycleId: Number,
//         number :  Number,
//         description:String,
//         examples : {type:Array},
//         locationIDs: [{locationID: 1}]
//     }
// );
// RecyclingModel.insert(
//     {
//         RecycleId: Number,
//         number :  Number,
//         description:String,
//         examples : {type:Array},
//         locationIDs: [{locationID: 2}]
//
//     }
// );
// RecyclingModel.insert(
//     {
//         RecycleId: Number,
//         number :  Number,
//         description:String,
//         examples : {type:Array},
//         locationIDs: [{locationID:3 }]
//     }
// );

