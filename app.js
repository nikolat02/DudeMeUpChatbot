//'u

'use strict';

let util = require('util');
let http = require('http');
let Bot  = require('@kikinteractive/kik');
let kikapi=require('./kik');
let MessageObj= require('./createMessage');
let AdapterMethods = require('./AdapterMethods.js');

let bot = new Bot({
    username: 'testbotsql',
    apiKey: '6281f398-869f-4224-8a64-c5f27662f5ca',
 	baseUrl: 'https://5211b561.ngrok.io',
});

bot.updateBotConfiguration();

bot.onTextMessage((message) => {
	console.log('incoming message is : ' + message.body);


	const sessionId = findOrCreateSession(message.from);

	console.log('session id is ==' + sessionId);

	if(message.body.toUpperCase()=='HI')
	{
		var message_send= MessageObj.SelectSeasonMessage(message);

		sessions[sessionId].context={"welcome":"true"};
		var context=sessions[sessionId].context;
		
		console.log('context is ==' + JSON.stringify(context));

		return kikapi.reply(message_send);

	}
	else if(message.body.toUpperCase()=='SUMMER')
	{
		var message_send= MessageObj.SelectStyleMessage(message);
		
		sessions[sessionId].context["season"]="summer";
		var context=sessions[sessionId].context;
		console.log('context is ==' + JSON.stringify(context));

		return kikapi.reply(message_send);

	}

	else if(message.body.toUpperCase()=='SPRING')
	{
		var message_send= MessageObj.SelectStyleMessage(message);
		
		sessions[sessionId].context["season"]="spring";
		var context=sessions[sessionId].context;
		console.log('context is ==' + JSON.stringify(context));

		return kikapi.reply(message_send);

	}

	else if(message.body.toUpperCase()=='PREP')
	{
		var message_send= MessageObj.SelectEventMessage(message);
		
		sessions[sessionId].context["style"]="prep";
		var context=sessions[sessionId].context;
		console.log('context is ==' + JSON.stringify(context));

		return kikapi.reply(message_send);

	}

	else if(message.body.toUpperCase()=='CLASSIC')
	{
		var message_send= MessageObj.SelectEventMessage(message);
		
		sessions[sessionId].context["style"]="CLASSIC";
		var context=sessions[sessionId].context;
		console.log('context is ==' + JSON.stringify(context));

		return kikapi.reply(message_send);

	}

	else if(message.body.toUpperCase()=='FOOTBALL')
	{
				
		sessions[sessionId].context["event"]="FOOTBALL";
		var context=sessions[sessionId].context;
		console.log('context is ==' + JSON.stringify(context));

		var season=sessions[sessionId].context["season"].toUpperCase();
		var style=sessions[sessionId].context["style"].toUpperCase();
		var event=sessions[sessionId].context["event"].toUpperCase();
		console.log("season: "+season +"  style: "+style +"   event: "+event);

		return AdapterMethods.getLink(season,style,event)
          .then(function(result) {
          	console.log(result);
			var message_send= "Based on your selection, this is the result : " +result[0].link;

		 return message.reply(message_send);

		});

	}

	else if(message.body.toUpperCase()=='BALLGAME')
	{
				
		sessions[sessionId].context["event"]="BALLGAME";
		var context=sessions[sessionId].context;
		console.log('context is ==' + JSON.stringify(context));

		var season=sessions[sessionId].context["season"].toUpperCase();
		var style=sessions[sessionId].context["style"].toUpperCase();
		var event=sessions[sessionId].context["event"].toUpperCase();
		console.log("season: "+season +"  style: "+style +"   event: "+event);

		return AdapterMethods.getLink(season,style,event)
          .then(function(result) {
          	console.log(result);
			var message_send= "Based on your selection, this is the result : " +result[0].link;

		 return message.reply(message_send);

		});

	}
   
});



const sessions = {};

const findOrCreateSession = (user) => {
  let sessionId;
  // Let's see if we already have a session for the user 
  Object.keys(sessions).forEach(k => {
    if (sessions[k].user === user) {
      // Yep, got it!
      sessionId = k;
    }
  });
  if (!sessionId) {
    // No session found for user, let's create a new one
    sessionId = new Date().toISOString();
    sessions[sessionId] = {user: user, context: {}};
  }
  return sessionId;
};



// local server and start listening
let server = http
    .createServer(bot.incoming())
    .listen(process.env.PORT || 3978);