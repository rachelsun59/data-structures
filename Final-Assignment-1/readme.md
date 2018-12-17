# Final Assignment 1: AA Meeting #
> See [The Assignment details](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_01.md)

## Visualization ##
## View Visualization here: https://aameetings.glitch.me/ ##

![AA Meeting](https://cdn.glitch.com/61c10fc6-dfca-4d95-aa4b-d0b7b2d3880a%2FAA%20Meeting.png?1544912845010 "AA Meeting")

## Process ##
### Step one: Cleaning Data - The integrity of the data ###
* Use Node 7.6 or Higher 
```bash install node on my computer
```
Clean up the following html file: 
https://parsons.nyc/aa/m01.html  
https://parsons.nyc/aa/m02.html  
https://parsons.nyc/aa/m03.html  
https://parsons.nyc/aa/m04.html  
https://parsons.nyc/aa/m05.html  
https://parsons.nyc/aa/m06.html  
https://parsons.nyc/aa/m07.html  
https://parsons.nyc/aa/m08.html  
https://parsons.nyc/aa/m09.html  
https://parsons.nyc/aa/m10.html

* Use Cheerio.js
Please see [cleaned up data here](https://github.com/rachelsun59/data-structures/blob/master/Final-Assignment-1/data/meetings.json)

The efficiency of the queries and page load
The choices of data structures
The inclusion of relevant data
The coherence and organization of your code and repository
The method for binding the data to the visual representation

### Step two: Create table in Database using sql ###
My choice of data structure is to seperate address, location, lat, long, and wheelchair access into a seperate table. I have a seperate addressID in the aameetinginfo database. Please see screenshot below. 

Please see for address table [addressid table](https://cdn.glitch.com/3697a4db-cb38-43eb-88d2-bd50f9c8efd4%2FScreen%20Shot%202018-12-16%20at%2020.56.25.png?1545011844836)

Please see for aadatainfo table  [aainfodata table](https://cdn.glitch.com/3697a4db-cb38-43eb-88d2-bd50f9c8efd4%2FScreen%20Shot%202018-12-16%20at%2020.56.35.png?1545011841749)


### Step three: Insert data into database using sql into seperate table ###

### Step four: Query data from database using sql ###

### Creating Visualization with Leatlet.js ###








