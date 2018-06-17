const request = require('request');
const line = require('@line/bot-sdk');


exports.hook = function hook(req, res) {
  if (req.body.events[0].message.type == 'text') {
    var message = [{
      type: 'text',
      text: req.body.events[0].message.text,
    }];
    sendResponse(res, req.body.events[0].replyToken, message)
  }
};

function sendResponse(res, replyToken, message) {
    const options = {
        method: 'POST',
        uri: 'https://api.line.me/v2/bot/message/reply',
        body: {
            replyToken: replyToken,
            messages: message,
        },
        auth: {
            bearer: '<CHANNEL ACCESS TOKEN>',
        },
        json: true
    };
    request(options, (err, response, body) => {
        console.log(JSON.stringify(response));
        res.send('OK');
    });
}