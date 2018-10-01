/*
in Bash Terminal:
export TAMU_KEY="api KEY" storing my API Key.
printenv | grep TAMU_KEY
*/

var request = require('request'); // npm install request
var async = require('async'); // npm install async
var fs = require('fs');

var apiKey = process.env.TAMU_KEY; 

console.log(process.env.TAMU_KEY);

var meetingsData = [];

//copy my array below
var addresses = JSON.parse(fs.readFileSync('data/output07.json'));//to read my new cleaned up address in JSON file.

// eachSeries in the async module iterates over an array and operates on each item in the array in series

async.eachSeries(addresses, function(value, callback) {
    var apiRequest = 'https://geoservices.tamu.edu/Services/Geocode/WebService/GeocoderWebServiceHttpNonParsed_V04_01.aspx?';
    apiRequest += 'streetAddress=' + value.split(' ').join('%20');
    apiRequest += '&city=New%20York&state=NY&apikey=' + apiKey;
    apiRequest += '&format=json&version=4.01';
    
    request(apiRequest, function(err, resp, body) {
        if (err) {throw err;}
        else {
            var tamuGeo = JSON.parse(body);
            var thisGeo = {};
            thisGeo.streetAddress = tamuGeo['InputAddress']['StreetAddress'];
            thisGeo.City = tamuGeo['InputAddress']['City'];
            thisGeo.latitude = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Latitude'];
            thisGeo.longitude = tamuGeo['OutputGeocodes'][0]['OutputGeocode']['Longitude'];
            console.log(thisGeo);
            meetingsData.push(thisGeo);
        }
    });
    
    setTimeout(callback, 1000);
}, function() {
    fs.writeFileSync('firstData.json', JSON.stringify(meetingsData));
    console.log('*** *** *** *** ***');
    console.log('Number of meetings in this zone: ');
    console.log(meetingsData.length);

});