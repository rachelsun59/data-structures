//Cleaning up zone 7: day, time, location, address, meetingtypes 

var fs = require('fs');
var cheerio = require('cheerio');

var content = fs.readFileSync('data/m07.txt');

/* using cheerio */
var $ = cheerio.load(content);
var addressData = [];
var locationData = [];
var dayData = [];

/* finding <td> tag and specify style class */
$('td').each(function(i, elem) {
   if($(elem).attr("style") =="border-bottom:1px solid #e3e3e3; width:260px") {
    
    var addressName=$(elem).html().split('<br>')[2].trim();
    var newAddress=addressName.substr(0,addressName.indexOf(","));
    addressData.push(newAddress);
    console.log(newAddress);
   }
});

$('h4').each(function(i, elem) {
   if($(elem).attr("style") =="margin:0;padding:0;") {
    
    var locationName=$(elem).html().trim();
    locationData.push(locationName);
    console.log(locationName);
   }
});

$('td').each(function(i, elem) {
   if($(elem).attr("style") =="border-bottom:1px solid #e3e3e3;width:350px;") {
    
    var meetingDay=$(elem).html().split('<b>')[1].trim();
    var newMeetingDay=meetingDay.substr(0,meetingDay.indexOf(" From</b>"));
    dayData.push(newMeetingDay);
    console.log(newMeetingDay);
   }
});

fs.writeFileSync('CleanData/zone07.json', JSON.stringify(addressData));

/*

/* output data in txt and JSON 

var thesisTitles = 'Data Visualization Project'; 
$('td').remove("div").each(function(i, elem) {
    if($(elem).attr("style") =="border-bottom:1px solid #e3e3e3; width:260px") {
    var addressName=$(elem).html().trim();
    var newAddress=addressName.substr(0,addressName.indexOf(","));
    addressData.push(newAddress);;
    thesisTitles += (newAddress) + '\n';
}});

fs.writeFileSync('data/output07.txt', thesisTitles);

/* export into JSON file 
fs.writeFileSync('CleanData/zone07.json', JSON.stringify(addressData));

*/