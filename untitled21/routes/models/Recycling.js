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



var recycle3 = new Recycling(
    {
        RecycleId: 3,
        number :  1,
        description:'ddwd',
        examples : ['dwdwd'],
        location: [{
            locationID:1,
            zipcode :  98210,
            name:'Blablawfef',
            city : 'Seattle',
            address : 'dddfd ave ne'

        },
            {
                locationID:2,
                zipcode :  98210,
                name:'fefef',
                city : 'Seattle',
                address : 'fefefefe'

            },
            {
                locationID:3,
                zipcode :  98210,
                name:'fefef',
                city : 'Seattle',
                address : 'fefefefe'

            }
        ]
    }
);
recycle3.save (function(err){
    if (err) console.log("Error on save!");
    console.log('Saved!');

});

module.exports = mongoose.model('Recycling',ResinSchema);

