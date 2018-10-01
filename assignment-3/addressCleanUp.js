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
var content = fs.readFileSync('../assignment-1/data/m07.txt');

/* using cheerio */
var $ = cheerio.load(content);

var addressData = [];

/* finding <td> tag and specify style class */
$('td').each(function(i, elem) {
   if($(elem).attr("style") =="border-bottom:1px solid #e3e3e3; width:260px") {
    
    var addressName=$(elem).html().split('<br>')[2].trim();
    
    //Use substr()to ignore everything after "," in existing address variable.

    var newAddress=addressName.substr(0,addressName.indexOf(","));
    
    addressData.push(newAddress);
    console.log(newAddress);
   }
});

/* output data in txt and JSON*/

var thesisTitles = ''; 
$('td').remove("div").each(function(i, elem) {
    if($(elem).attr("style") =="border-bottom:1px solid #e3e3e3; width:260px") {
    var addressName=$(elem).html().split('<br>')[2].trim();
    var newAddress=addressName.substr(0,addressName.indexOf(","));
    addressData.push(newAddress);;
    thesisTitles += (newAddress) + '\n';
}});

fs.writeFileSync('data/output07.txt', thesisTitles);

/* export into JSON file */
fs.writeFileSync('data/output07.json', JSON.stringify(addressData));
