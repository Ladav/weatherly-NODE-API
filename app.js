const chalk = require('chalk');
const GeoCode = require('./utils/GeoCode');
const Forecast = require('./utils/Forecast');

const address = process.argv[2];

if(!address || address === ''){     // if address is undefined or empty string
    console.log('Please provide a Address!');
}
else {
    GeoCode(address, (error, {longitude, latitude, location}) => {
        if(error) {
            return console.log(error);
        }
    
        Forecast(longitude, latitude, (error, forecastData) => { // forecastData is a string
            if(error) {
                return console.log(error);
            }
    
            console.log(location);
            console.log(forecastData);
        });
    });
}


