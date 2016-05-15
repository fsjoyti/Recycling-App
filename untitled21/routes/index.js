var Recycle = require('./Models/Recycling');
module.exports = function(app){
  app.get('/',function(req,res){
    res.render('index.ejs');

  });
  app.get('/recycling',function(req,res){
    console.log(req.query);
    var jsonObj = req.query;
    var RIC = jsonObj.number;
    var ZIP = jsonObj.location;
    console.log(RIC);
    console.log(ZIP);

    Recycle.find({'number':1},function(error,recycle){

      if(error)res.send(error);
      else {
        res.json(recycle);
      }




    });

  });
}