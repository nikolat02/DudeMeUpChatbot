 var Adapter = require("./Adapter");
 var db = new Adapter();


 var AdapterMethods = function() {};

AdapterMethods.prototype.getLink = function(season,style,event) {
   return db.getLink(season,style,event)
     .then(function(result) {
       return result;
     }, function(error) {
       console.error('Error fetching link for this selection : ' )
     })
 }

 module.exports = new AdapterMethods();
