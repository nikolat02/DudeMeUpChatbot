var mysql = require("mysql");
var Q = require("q");
var options = {
  "host": process.env.MYSQL_HOST || "nikola",
  "port": process.env.MYSQL_PORT || "8000",
  "user": process.env.MYSQL_USER || "Nikola PC",
  "password": process.env.MYSQL_PASSWORD || "",
  "database": process.env.MYSQL_DATABASE || "dmu"
};

function Adapter() {
  if (this instanceof Adapter) {
    //this.root = new Firebase(process.env.FIREBASE_URL || "https://glaring-heat-2025.firebaseio.com/");
    this.db = mysql.createPool(options);
  } else {
    return new Adapter();
  }
}

//get bot user on userid
Adapter.prototype.getLink = function(season,style,event) {

  const query = "SELECT link FROM restokit_kiksql.test"+
                " WHERE season ="+ this.db.escape(season) +
                "AND style="+ this.db.escape(style) + 
                "AND event_type="+ this.db.escape(event) ;

  console.log(query);

  var deferred = Q.defer();
  this.db.getConnection(function(err, connection) {
    if (err) {
      deferred.reject(err);
    } else {
      connection.query(query, [], function(err, results) {
        connection.release();
        if (err) {
          deferred.reject(err);
        } else {
          deferred.resolve(results);
        }
      });
    }
  });
  return deferred.promise;
}



module.exports = Adapter;



