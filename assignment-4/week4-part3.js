const { Client } = require('pg');
var async = require('async');
var fs = require('fs');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'rachelsun';
db_credentials.host = 'rachelsun.c8get8cpzam7.us-east-1.rds.amazonaws.com';
db_credentials.database = 'rachelsun';
db_credentials.password = process.env.AWSRDS_PW; //export password
db_credentials.port = 5432;

var addressesForDb = JSON.parse(fs.readFileSync('../assignment-3/firstData.json'))

async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
    var thisQuery = "INSERT INTO aalocations VALUES (E'" + value.address + "', " + value.latLong.lat + ", " + value.latLong.lng + ");";
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
}); 