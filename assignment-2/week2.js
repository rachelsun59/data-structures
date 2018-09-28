// npm install cheerio

/* html Breakdown
   <body>
    <center>
     <tbody>
      <tr>
       <td>
        <table>
         <tbody>
          3<tr>
            <div>
             <table>
               <tbody>
                 1<tr>
*/

var fs = require('fs');
var cheerio = require('cheerio');

/* my ID number is N005757 */
var content = fs.readFileSync('data/input07.txt');

/* using cheerio */
var $ = cheerio.load(content);
var addressData = [];

/* finding <td> tag and specify style class */
$('td').each(function(i, elem) {
   if($(elem).attr("style") =="border-bottom:1px solid #e3e3e3; width:260px") {
    
    var addressName=$(elem).html().split('<br>')[2].trim();
    var newAddress=addressName.substr(0,addressName.indexOf(","))+", New York, NY";
    addressData.push(newAddress);
    console.log(newAddress);
   }
});

/* output data in txt and JSON*/

var thesisTitles = 'Data Visualization Project'; 
$('td').remove("div").each(function(i, elem) {
    if($(elem).attr("style") =="border-bottom:1px solid #e3e3e3; width:260px") {
    var addressName=$(elem).html().split('<br>')[2].trim();
    var newAddress=addressName.substr(0,addressName.indexOf(","))+", New York, NY";
    addressData.push(newAddress);;
    thesisTitles += (newAddress) + '\n';
}});

fs.writeFileSync('data/output07.txt', thesisTitles);

/* export into JSON file */
fs.writeFileSync('data/output07.json', JSON.stringify(addressData));
