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
        recipeID: 1,
        recipeName: 'Chicken',
        categoryID: 1,
        recipeInstructions: 'Boil chicken',
        ingredientIDs: [{ingredientID: 1}]
    }
);
RecyclingModel.insert(
    {
        recipeID: 2,
        recipeName: 'Ferret treat',
        categoryID: 3,
        recipeInstructions: 'Put olive oil on ferret bellies',
        ingredientIDs: [{ingredientID: 2}]
    }
);
RecyclingModel.insert(
    {
        recipeID: 3,
        recipeName: 'Broccoli Snack',
        categoryID: 2,
        recipeInstructions: 'Boil broccoli until mostly cooked, then saute in olive oil for 5-10 minutes',
        ingredientIDs: [{ingredientID: 2}, {ingredientID: 3}]
    }
);

