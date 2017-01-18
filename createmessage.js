function SelectSeasonMessage(message) {

    var message_send=[
        {
            "chatId":message.chatId,
            "type": "text",
            "to": message.from,
            "body": "Welcome to DudeMeUp!  We are here to suggest clothing options for Men in real-time! \n\n Select a season",
            "keyboards": [
                {
                    "to": message.from,
                    "type": "suggested",
                    "responses": [
                        {
                            "type": "text",
                            "body": "Summer"
                        },
                        {
                            "type": "text",
                            "body": "Spring"
                        }
                        {
                            "type": "text",
                            "body": "Winter"
                        },
                        {
                            "type": "text",
                            "body": "Fall"
                        }
                    ]
                }   
            ]
        }
    ]

    return message_send;
}


function SelectStyleMessage(message) {

    var message_send=[
        {
            "chatId":message.chatId,
            "type": "text",
            "to": message.from,
            "body": "Now that you have selected the Season....\n\n What is the Style that best fits you?",
            "keyboards": [
                {
                    "to": message.from,
                    "type": "suggested",
                    "responses": [
                        {
                            "type": "text",
                            "body": "PREP"
                        },
                        {
                            "type": "text",
                            "body": "CLASSIC"
                        }
                         {
                             "type": "text",
                             "body": "CONTEMPORARY "
                         },
                         {
                             "type": "text",
                             "body": "URBAN"
                         },
                         {
                             "type": "text",
                             "body": "SURFER "
                         },
                         {
                            "type": "text",
                             "body": "HIPSTER"
                         }
                    ]
                }   
            ]
        }
    ]
    return message_send;
}

function SelectEventMessage(message) {

    var message_send=[
        {
            "chatId":message.chatId,
            "type": "text",
            "to": message.from,
            "body": "Ok great!  Now that you selected the Style....\n\nLastly what type of Event will you be attending?",
            "keyboards": [
                {
                    "to": message.from,
                    "type": "suggested",
                    "responses": [
                        
                        {
                            "type": "text",
                            "body": "Football"
                        },
                        {
                             "type": "text",
                            "body": "Outdoor Cafe "
                         },
                        {
                            "type": "text",
                            "body": "Ballgame"
                        }
                         {
                             "type": "text",
                           "body": "Haunted "
                         },
                         {
                             "type": "text",
                             "body": "House"
                         }
                    ]
                }   
            ]
        }
    ]
    return message_send;
}
exports.SelectSeasonMessage=SelectSeasonMessage;
exports.SelectStyleMessage=SelectStyleMessage;
exports.SelectEventMessage=SelectEventMessage;

