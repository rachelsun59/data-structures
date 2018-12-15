var async = require("async");
var Client = require("pg").Client;


var dbCredentials = {
    user: "rachel",
    host: "45.55.56.77",
    database: "rachel_ds",
    password: process.env.DB_Password,
    port: 5432
};

var meetings = require("./data/meetings.json");


const client = new Client(dbCredentials);
client.connect();

var thisQuery = "SELECT * FROM aainfodata WHERE addressid = 48;";

client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
});

