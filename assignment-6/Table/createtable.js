const { Client } = require('pg');
const cTable = require('console.table');

// AWS RDS POSTGRESQL INSTANCE
var db_credentials = new Object();
db_credentials.user = 'sunr9259';
db_credentials.host = 'rachelsun59.cjjhqunspjk2.us-east-2.rds.amazonaws.com';
db_credentials.database = 'aainfo';
db_credentials.password = 'Niuniu528.';
db_credentials.port = 5432;

// Connect to the AWS RDS Postgres database
const client = new Client(db_credentials);
client.connect();

var thisQuery = "CREATE TABLE aainfo (id serial PRIMARY KEY, address VARCHAR(100), latitude DOUBLE precision, longitude DOUBLE precision, mtgroup VARCHAR(100), mtlocation VARCHAR(100), wheelchair BOOLEAN,mtdate VARCHAR [], start VARCHAR [], mtend VARCHAR [], mttype VARCHAR [], mtspin TEXT [], mtzone SMALLINT)";

//var thisQuery = "DROP TABLE aainfo;";


client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
})




var async = require('async');
var fs = require('fs');

var addressesForDb = JSON.parse(fs.readFileSync('../CleanData/m08.json'))

async.eachSeries(addressesForDb, function(value, callback) {
    const client = new Client(db_credentials);
    client.connect();
   var thisQuery = "INSERT INTO aainfo (address,mtgroup,latitude,longitude, mtlocation, wheelchair ,mtdate, mtstart, mtend, mttype,mtspin,mtzone) VALUES (E'"+value.address+"','"+value.group + "',"+value.latLong.Lat+ ","+ value.latLong.Long+ ",'"+ value.mtlocation+"','"+value.wheelchair+ "','{"+ value.mtDate + "}','{" + value.start + "}','{"+ value.end +"}','{"+value.type+"}','{"+ value.spinterest+ "}',"+ value.zone+");";
   
    client.query(thisQuery, (err, res) => {
        console.log(err, res);
        client.end();
    });
    setTimeout(callback, 1000); 
}); 

var thisQuery = "SELECT mtgroup, mtspin, mtzone, mtlocation, address, mttype FROM aainfo WHERE 'Monday' = ANY (mtdate)";
 

