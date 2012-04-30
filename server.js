var restify = require('restify');

function getOrders(){
   var client = restify.createJsonClient({
   url: 'https://www.bitcoinica.com/'
});

client.get('/api/quotes/BTCUSD.json', function(err, req, res, obj) {
  console.log(obj);
}); 
}


function getHistory(history){
    var client = restify.createJsonClient({
    url: 'https://www.bitcoinica.com/'
});

client.get('/api/quotes/BTCUSD/history.json?n=' + history, function(err, req, res, obj) {
  console.log(obj);
}); 
}

getOrders();
getHistory(10);
