var async = require('async');
var fs = require('fs');
const { Client } = require('pg');


var dbCredentials = {
    user: "rachel",
    host: "45.55.56.77",
    database: "rachel_ds",
    password: process.env.DB_Password,
    port: 5432
};

var addressesForDb = require("./data/meetings.json");
// running my cleaned up aameeting json file.

const client = new Client(dbCredentials);
client.connect();

async.eachSeries(addressesForDb, function(value, callback) {
    var thisQuery = `
        INSERT INTO aaaddress (
            mtlocation,
            address,
            lat,
            long,
            wheelchair
        )
        VALUES ($1, $2, $3, $4, $5);
   `;

// By using `` It will help me to read my sql faster.

    client.query(
        thisQuery,
        [
            value.mtlocation,
            value.address,
            value.lat,
            value.long,
            value.wheelchair
        ],
        (err, res) => {
            console.log(err, res);
        }
    );
    
// Insert data into aaaadress table. 
// ------------------Insert Data into aainfotable------------------- //

/* Joining 2 tables together. And only select 
    var thisQuery = `
    SELECT 
        aaaddress.addressid, aainfodata.meetingid 
    FROM 
        aaaddress 
    LEFT JOIN 
        aainfodata ON aaaddress.addressid = 
        aainfodata.addressid
        
    ORDER BY 
        aaadress.address;
`
*/


    setTimeout(callback, 1000); 
}, function() {
    client.end();
}); 