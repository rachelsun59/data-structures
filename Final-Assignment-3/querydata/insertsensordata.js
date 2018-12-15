var async = require('async');
var fs = require('fs');
const { Client } = require('pg');


var addressesForDb = require("./data/sensordata.json");
// running my cleaned up aameeting json file.

var dbCredentials = {
    user: "rachel",
    host: "45.55.56.77",
    database: "rachel_ds",
    password: process.env.DB_Password,
    port: 5432
};


const client = new Client(dbCredentials);
client.connect();

async.eachSeries(addressesForDb, function(value, callback) {
    var thisQuery = `
        INSERT INTO sensordata (
            sensorday,
            temperature
        )
        VALUES ($1, $2);
   `;

// By using `` It will help me to read my sql faster.

    client.query(
        thisQuery,
        [
            value.sensorday,
            value.num_obs
        ],
        (err, res) => {
            console.log(err, res);
        }
    );
    
    
     setTimeout(callback, 1000); 
}, function() {
    client.end();
}); 