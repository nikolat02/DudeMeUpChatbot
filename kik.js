
var Q = require("q");
var request = require("request");

function reply(message) {
  var deferred = Q.defer();
  request({
    url: 'https://api.kik.com/v1/message',
    auth: {
      user: "testbotsql",
      pass: "6281f398-869f-4224-8a64-c5f27662f5ca"
    },
    method: 'POST',
    json: {
      messages: message,
    }
  }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      var senderID = body.recipient_id;
      var messageId = body.message_id;

      if (messageId) {
        console.log("\nSuccessfully sent message with id to recipient");
        deferred.resolve(body);
      } else {
        console.log("\nSuccessfully called Send API for recipient");
        deferred.resolve(body);
      }
    } else {
      console.error("Failed calling Send API", response.statusCode, response.statusMessage, body.error);
      deferred.reject(body);

    }
  });
  return deferred.promise;

}

exports.reply = reply;