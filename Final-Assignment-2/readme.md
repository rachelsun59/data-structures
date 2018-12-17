# Final Asignment 2 - Dear Diary #

## View Visualization here: https://dear-diary.glitch.me/ ##

> See [The Assignment details](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_02.md)

## Requirement ##
* Use Node 7.6 or Higher 

## Process ##
### Step one: Designing What data to collect ###
The data I collected is my daily sleep hour, date, tasks competed and coffee intake. 


### Step two: Create and insert table in Database using sql ###
I store all data for "Dear Diary"--a source of semi-structured, qualitative data. The data should be stored in Amazon DynamoDB and queried using the aws-sdk module in Node. See how I insert data into DynamoDB [here](https://github.com/rachelsun59/data-structures/blob/master/Final-Assignment-2/insertdiarydata.js)

This part was the most difficult part of the project. Because I had a difficult time to connect with DynamoDB. I used other method and used my own database to collect the database first. But I end up figured out the problem. It was the connection issue between the dynamodb and my server. 

### Step three: Query data from database using sql ###
I use the code [here](https://github.com/rachelsun59/data-structures/blob/master/Final-Assignment-2/insertdiarydata.js) to query data. 

### Step four: Creating Visualization with Chart.js ###
Creating the visualization was fairly easier. Because I hardcoded the data into the database. I used [Chart.js](https://www.chartjs.org/samples/latest/) Please see my code [here](https://github.com/rachelsun59/data-structures/blob/master/Final-Assignment-2/deardiary.html)

### View Visualization here: https://dear-diary.glitch.me/ ###

My Design: 
![Dear Diary](https://cdn.glitch.com/3697a4db-cb38-43eb-88d2-bd50f9c8efd4%2FDear%20Diary.png?1545013954653)





