request.post({
    url: "https://api.kik.com/v1/config",
    auth: {
        user: "dmutest",
        pass: '17dd5165-9874-45a4-b466-cb17dd512dd0',
    },
    json: {
        "webhook": "https://vrkbbljojg.localtunnel.me", 
        "features": {
            "receiveReadReceipts": false, 
            "receiveIsTyping": false, 
            "manuallySendReadReceipts": false, 
            "receiveDeliveryReceipts": false
        }
    }
}, callback);

