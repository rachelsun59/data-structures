var async = require("async");
var Client = require("pg").Client;

// Read meetings.json file. Using require() will automaticly read it as
// a jason instead of a string.
var meetings = require("./data/meetings.json");

// Connecting to database. 
var dbCredentials = {
    user: "rachel",
    host: "45.55.56.77",
    database: "rachel_ds",
    password: process.env.DB_Password,
    port: 5432
};

// Client is creating a new database Client. Connecting to the database. 
var client = new Client(dbCredentials);
client.connect();

console.log("Okayy.... Here goes nothing!");

// async is from utility module which provides straight-forward, powerful 
// functions for working with asynchronous JavaScript. As Each of series is 
// similar to ForEach function. The difference is each of series can tell the 
// code when to stop and when to go to the next function.
// eachOfSeries(coll, iteratee, callbackopt). 
async.eachOfSeries(meetings, parseAndSaveMeeting, closeConnection);

// This is an async function to apply to each item in coll. Invoked with 
// (item, key, callback). This will fetch addressid from aaadress table in the 
// DB based on thelat and long in each object (meetingInfo) in meeting.json.
function parseAndSaveMeeting(meetingInfo, index, next) {

// Adding a + to change latitude from string to number. 
    var lat = +meetingInfo.lat;
    var long = +meetingInfo.long;

// Fetching lat and long from aaadress table
    var fetchAddressIdQuery = `
        SELECT addressid
        FROM aaaddress
        WHERE lat = ${lat} AND long = ${long}
        LIMIT 1;
    `;

// while parsing the addresses I realized there are a few address that are 
// missing. We uses the function whenDatabaseResonds with no result. It will 
// return "we got one without an address."
    client.query(fetchAddressIdQuery, whenDatabaseResponds);

    function whenDatabaseResponds(error, result) {
        if (error) {
            console.log(error);
            return next();
        }

        if (result.rows.length === 0) {
            console.log("WE GOT ONE WITHOUT AN ADDRESS OMG");
            return next();
        }

// Now we need to create a new object that contains addressId and the rest of 
// the aainfo. 
        var addressId = result.rows[0].addressid;

        var newMeetingInfo = {
            mtgroup: meetingInfo.mtgroup,
            mtday: meetingInfo.mtday,
            mtstart: meetingInfo.mtstart,
            mtend: meetingInfo.mtend,
            mttype: meetingInfo.mttype,
            mtspin: meetingInfo.mtspin,
            mtzone: meetingInfo.mtzone,
            addressid: addressId
        };

// Now we will insert the new object into the database table aainfodata. 
        var insertMeetingInfoQuery = `
            INSERT INTO aainfodata (
                mtgroup,
                addressid,
                mtday,
                mtstart,
                mtend, 
                mttype,
                mtspin,
                mtzone
            )
            VALUES  (
                $1, $2, $3, $4, $5, $6, $7, $8
            );
        `;

        var valuesInOrder = [
            newMeetingInfo.mtgroup,
            newMeetingInfo.addressid,
            newMeetingInfo.mtday,
            newMeetingInfo.mtstart,
            newMeetingInfo.mtend,
            newMeetingInfo.mttype,
            newMeetingInfo.mtspin,
            newMeetingInfo.mtzone
        ];

    // After the query is done. We have to tell it to stop. And close the database. 
        client.query(insertMeetingInfoQuery, valuesInOrder, whenDatabaseIsDoneInserting);

        function whenDatabaseIsDoneInserting(error) {
            if (error) {
                console.log(error);
            }
    // This will help me to see the number of item and work in progress.        
            console.log(`Item ${index + 1}/${meetings.length} done!`);
            setTimeout(next, 250);
        }
    }
}


function closeConnection() {
    client.end();
    console.log("We're all done! Hooray 🎉🎉");
}