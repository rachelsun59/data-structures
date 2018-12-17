# Final Asignment 3 - Sensor Data #

## View Visualization here: https://sensordata.glitch.me/ ##

> See [The Assignment details](https://github.com/visualizedata/data-structures/blob/master/assignments/weekly_assignment_03.md)

## Requirement ##
* Use Node 7.6 or Higher 
* Particle Photon or Electron
* Hook up wires
* Analog Temperature sensor - TMP36

## Process ##
### Step one: Set up the sensor ###
I used the temperture sensor to collect the temperature in my room. 
Here are the steps that I used to set up the sensor: 


### Step two: Collecting Data ###
Here is the starter code I used to set up the sensor
```
// -----------------------------------------
// Temperature
// -----------------------------------------

// In this example, we're going to register a Particle.variable() with the cloud so that we can read the level of a temperature sensor.

int temperature = A0; // This is the input pin where you read the value of the sensor.

double analogvalue; // Here we are declaring the integer variable analogvalue, which we will use later to store the value of the sensor.

void setup() {

    // This lets the device know which pin will be used to read incoming voltage.
    pinMode(temperature, INPUT);  // Our sensor pin is input (reading the sensor)

    // We are going to declare a Particle.variable() here so that we can access the value of the sensor from the cloud.
    Particle.variable("analogvalue", &analogvalue, DOUBLE);
    // This is saying that when we ask the cloud for "analogvalue", this will reference the variable analogvalue in this app, which is a double variable.

}

void loop() {

    // check to see what the value of the sensor is and store it in the int variable analogvalue
    analogvalue = (((analogRead(temperature) * 3.3)/4095) - 0.5) * 100; 
    delay(100);
    
}
```

This part was the most difficult part of the project. Because I had a difficult time to connect with DynamoDB. I used other method and used my own database to collect the database first. But I end up figured out the problem. It was the connection issue between the dynamodb and my server. 

### Step Three: Creating table and Insert data ###
[Here](https://github.com/rachelsun59/data-structures/blob/master/Final-Assignment-3/querydata/createsensortable.js) is the table I created. And [here](https://github.com/rachelsun59/data-structures/blob/master/Final-Assignment-3/querydata/insertsensordata.js) is the data entry.

### Step four: Query data from database using sql ###
[Here](https://github.com/rachelsun59/data-structures/blob/master/Final-Assignment-3/data/sensordata.json) the data I collected. 

### Creating Visualization with Chart.js ###
Creating the visualization was fairly easier. Because I hardcoded the data into the database. I used [Chart.js](https://www.chartjs.org/samples/latest/) Please see my code [here](hhttps://github.com/rachelsun59/data-structures/blob/master/Final-Assignment-3/visualization/sensor.html)

### View Visualization here: https://sensordata.glitch.me/ ###


