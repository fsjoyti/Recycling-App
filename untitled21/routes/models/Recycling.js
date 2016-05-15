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
        ingredient: "Chicken Breast",
        ingredientID: 1,
        quantity: 2,
        caloriecount: 100
    }
);
ingredientsCollection.insert(
    {
        ingredient: "Olive Oil",
        ingredientID: 2,
        quantity: 1,
        caloriecount: 100
    }
);
ingredientsCollection.insert(
    {
        ingredient: "Broccoli",
        ingredientID: 3,
        quantity: 2,
        caloriecount: 20
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

