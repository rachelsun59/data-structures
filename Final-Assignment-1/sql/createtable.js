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


// var thisQuery = "CREATE TABLE aaaddress (addressid serial PRIMARY KEY, mtlocation VARCHAR(100), address VARCHAR(100), lat DOUBLE precision, long DOUBLE precision, wheelchair BOOLEAN)"
// I am seperating address data as a seperate table. Because this will allow the data to be easier and faster to query. 

// var thisQuery = "ALTER TABLE aaaddress ADD UNIQUE (lat, long);"
// ALTER TABLE and ADD UNIQUE () will add unique constrain to the coloum, so when inserting data to the database, there won't be dupicate data input in the database. 

var thisQuery = "CREATE TABLE aainfodata (meetingid serial PRIMARY KEY, mtgroup VARCHAR(100), addressid INTEGER, mtday VARCHAR(100), mtstart VARCHAR(100), mtend VARCHAR(100), mttype VARCHAR(100), mtspin VARCHAR(50), mtzone SMALLINT)";
// Again creating a seperate table from address. Location will be JLEFT OINed with aaaadress unique addressid. 

/* var thisQuery = `
    SELECT 
        aaaddress.addressid, aainfodata.meetingid 
    FROM 
        aainfodata 
    JOIN 
        aaaddress ON  aainfodata.addressid =
        aaaddress.addressid
    ORDER BY 
        aaadress.address;
*/

// This query syntax will join aaadress table into aainfodata. 


// var thisQuery = "DROP TABLE aainfodata;"; 
// This syntax is for dropping the table. 

// var thisQuery = "DELETE FROM TABLE aaadress;"; 
// This syntax is for deleting ALL the data in the table. 


client.query(thisQuery, (err, res) => {
    console.log(err, res);
    client.end();
})