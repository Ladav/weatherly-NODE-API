const request = require('request');
const chalk = require('chalk');
/*
const url = 'https://api.darksky.net/forecast/82bd40d85d184e52b0ff6b1bac7fe58b/37.8267,-120?units=si&exclude=hourly,minutely';

request({url: url, json: true}, (error, response) => {
    if(error) {
        console.log(chalk.red('Unable to connect the weather services!'));
    }
    else if(response.body.error) {
        console.log(chalk.yellow('Unable to find location!'));
    }
    else {
        console.log(response.body.daily.data[0].summary + ' It is currently '+ response.body.currently.temperature + ' Degrees Celsius out. ' + response.body.currently.precipProbability + '% chance of rain.');
    }
});
*/


const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Lsajfkvasvfjkasb.json?access_token=pk.eyJ1IjoibGFkYXY0MTMiLCJhIjoiY2syaDR5YzRiMDV0ZTNubzAwY2l2M3NrYSJ9.wkXlmqP4iyen_MNUv1htwQ&limit=1';

request({ url: url, json: true}, (error, response) => {
    if(error) {
        console.log(chalk.red('Unable to connect to location services!'));
    }
    // body.message -> when location is empty string
    // body.features.length < 1 -> when invalid location is entered ex- 11dsdsind
    else if(response.body.message || response.body.features.length < 1) {
        console.log(chalk.yellow('Unable to find location!'));
    }
    else {
        const longitude = response.body.features[0].center[0];
        const latitude = response.body.features[0].center[1]; 
        console.log(`longitude: ${longitude} and latitude: ${latitude}`);
    }
});