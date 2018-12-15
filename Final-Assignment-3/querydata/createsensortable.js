const { Client } = require('pg');
// npm installed pg

var dbCredentials = {
    user: "rachel",
    host: "45.55.56.77",
    database: "rachel_ds",
    password: process.env.DB_Password,
    port: 5432
};


// I am using an outsourse database. 

const client = new Client(dbCredentials);
client.connect();

var thisQuery = "CREATE TABLE sensordata (sensorid serial PRIMARY KEY, sensorday INTEGER, temperature DOUBLE precision)";


client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
})
