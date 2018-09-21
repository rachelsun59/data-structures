// npm install request
// mkdir data

var request = require('request');
var fs = require('fs');

// create a loop
for (var i=1; i < 11; i++) {
    if (i < 10) {
        i = '0' + i
    }
    
// Create a loop function (idx) 

    function numberToCount (idx) {
    var url = 'https://parsons.nyc/aa/m' + idx + '.html';
    var fn = '/home/ec2-user/environment/assignment-1/data/m' + idx + '.txt'
    
    request(url, function(error, response, body){
      if (!error && response.statusCode == 200) {
            fs.writeFileSync(fn, body);
            console.log("success.")
        }
        else {console.log("Request failed!")}
    });
    }
    numberToCount(i);
}






