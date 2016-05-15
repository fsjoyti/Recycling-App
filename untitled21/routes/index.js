var Recycle = require('./Models/Recycling');
module.exports = function(app){
  app.get('/',function(req,res){
    res.render('index.ejs');

  });
  app.get('/recycling',function(req,res){
   
    var jsonObj = req.query;
    var RIC = jsonObj.number;
    var ZIP = jsonObj.location;
      var number = parseInt(RIC);
      var  zip = parseInt(ZIP);



    Recycle.findOne({'number':number,'location.zipcode':zip},{'location.$': 1},function(error,recycle) {


      if (error)res.send(error);
      else {
        console.log(recycle.location[0]);
        res.json(recycle);
      }
    }).limit(1);


    });

  
}