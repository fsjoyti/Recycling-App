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
    location :{type:Array},







});

var RecyclingModel = mongoose.model('Recycling', ResinSchema,'Recycle');
var recycle = new RecyclingModel(
    {
        RecycleId: 1,
        number :  1,
        description:'ddwd',
        examples : ['dwdwd'],
        location: [{
            locationID:1,
            zipcode :  98230,
            name:'Blabla',
            city : 'Everett',
            address : '12231 efdf'

        }]
    }
);
recycle.save (function(err){
    if (err) throw err;
    console.log('Saved!');

});
//module.exports = mongoose.model('Recycling',ResinSchema);

