var Recycle = require('./Models/Recycling');
module.exports = function(app){
  app.get('/',function(req,res){
    res.render('index.ejs');

  });
  app.get('/recycling',function(req,res){
   
    var jsonObj = req.query;
    var RIC = jsonObj.number;
    var ZIP = jsonObj.location;






    Recycle.find({'number':number,'location.zipcode':zip},function(error,recycle){


      if(error)res.send(error);
      else {
        console.log(recycle);
        res.json(recycle);
      }





    });

  });
}