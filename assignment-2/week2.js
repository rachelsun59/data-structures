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
var location ="";

var content = fs.readFileSync('data/input07.txt');

var $ = cheerio.load(content);

$('td').each(function(i, elem) {
   if($(elem).attr("style") =="border-bottom:1px solid #e3e3e3; width:260px") {
    location += ($(elem).html().split('<br>')[2].trim());
    console.log($(elem).text());
   }
});

var thesisTitles = 'Data Visualization Project'; 
$('td').each(function(i, elem) {
    if($(elem).attr("style") =="border-bottom:1px solid #e3e3e3; width:260px") {
    location += ($(elem).html().split('<br>')[2].trim());
    thesisTitles += ($(elem).text()) + '\n';
}});

fs.writeFileSync('data/output07.txt', thesisTitles);