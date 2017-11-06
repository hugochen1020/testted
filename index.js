var linebot = require('linebot');
var express = require('express');

var bot = linebot({
  channelId: 1544693039,
  channelSecret: 0f322fbde7d4b70600a440b56d493add,
  channelAccessToken: a91yhLAqUKTiPu5cKIFKSoeCrrf6
  					  8rXLcZW7AwMXM3shqTAjrr/MXlCgMKfWKRQuG3hvsQQdKSaL
    				  5kTwEL8PJGfi9JomJNS9xppVix7sCvlaKrWt9HJnIG5Rr9fK
                      xDHih2rbXCTIVuoCJeV8HWGmpgdB04t89/1O/w1cDnyilFU=
});                      

bot.on('message', function(event) {
  console.log(event); //把收到訊息的 event 印出來看看
});

const app = express();
const linebotParser = bot.parser();
app.post('/', linebotParser);

//因為 express 預設走 port 3000，而 heroku 上預設卻不是，要透過下列程式轉換
var server = app.listen(process.env.PORT || 8080, function() {
  var port = server.address().port;
  console.log("App now running on port", port);
});